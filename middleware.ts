import { NextRequest, NextResponse } from "next/server";
import { getProductLineRedirects, type ProductLineRedirect } from "./src/lib/product-line-redirects";

const REDIRECT_CACHE_MS = 5 * 60 * 1000;

type CachedRedirects = {
  expires: number;
  exact: Map<string, ProductLineRedirect[]>;
  regex: ProductLineRedirect[];
};

let redirectCache: CachedRedirects | null = null;

function stripTrailingSlash(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

function shouldSkipRedirectLookup(pathname: string): boolean {
  return pathname.startsWith("/_next") || pathname.startsWith("/api/");
}

async function loadRedirects(): Promise<CachedRedirects> {
  const now = Date.now();

  if (redirectCache && now <= redirectCache.expires) {
    return redirectCache;
  }

  const rows = await getProductLineRedirects();
  const exact = new Map<string, ProductLineRedirect[]>();
  const regex: ProductLineRedirect[] = [];

  for (const row of rows) {
    if (row.regex) {
      regex.push(row);
      continue;
    }

    const path = stripTrailingSlash(row.source);
    const list = exact.get(path) ?? [];
    list.push(row);
    exact.set(path, list);
  }

  redirectCache = { expires: now + REDIRECT_CACHE_MS, exact, regex };
  return redirectCache;
}

function queryMatches(request: NextRequest, row: ProductLineRedirect): boolean {
  if (!row.has?.length) {
    return true;
  }

  return row.has.every(({ key, value }) => request.nextUrl.searchParams.get(key) === value);
}

function resolveDestination(request: NextRequest, destination: string, pathname: string): string | null {
  const resolved = destination.startsWith("http")
    ? destination
    : new URL(destination, request.nextUrl.origin).toString();

  try {
    const destUrl = new URL(resolved);
    const samePath =
      destUrl.origin === request.nextUrl.origin && stripTrailingSlash(destUrl.pathname) === stripTrailingSlash(pathname);

    if (samePath) {
      return null;
    }
  } catch {
    return null;
  }

  return resolved;
}

function applyRegex(pathname: string, search: string, row: ProductLineRedirect): string | null {
  try {
    const pattern = row.source.startsWith("^") ? row.source : `^${row.source}`;
    const re = new RegExp(pattern);
    const input = `${pathname}${search}`;

    if (!re.test(input) && !re.test(pathname)) {
      return null;
    }

    const source = re.test(input) ? input : pathname;
    return source.replace(re, row.destination);
  } catch {
    return null;
  }
}

async function lookupFrontRedirect(request: NextRequest) {
  const pathname = stripTrailingSlash(request.nextUrl.pathname);

  if (shouldSkipRedirectLookup(pathname)) {
    return null;
  }

  const cache = await loadRedirects();
  const exactRows = cache.exact.get(pathname) ?? [];
  const withQuery = exactRows.filter((row) => row.has?.length);
  const withoutQuery = exactRows.filter((row) => !row.has?.length);
  const exactMatch = [...withQuery, ...withoutQuery].find((row) => queryMatches(request, row));

  if (exactMatch) {
    const destination = resolveDestination(request, exactMatch.destination, pathname);

    if (!destination) {
      return null;
    }

    return { destination, permanent: exactMatch.permanent };
  }

  for (const row of cache.regex) {
    const replaced = applyRegex(pathname, request.nextUrl.search, row);

    if (!replaced) {
      continue;
    }

    const destination = resolveDestination(request, replaced, pathname);

    if (!destination) {
      continue;
    }

    return { destination, permanent: row.permanent };
  }

  return null;
}

export async function middleware(request: NextRequest) {
  const frontRedirect = await lookupFrontRedirect(request);

  if (frontRedirect) {
    return NextResponse.redirect(frontRedirect.destination, frontRedirect.permanent ? 301 : 302);
  }

  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
    style-src 'self' 'nonce-${nonce}';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;
  const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, " ").trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  requestHeaders.set("Content-Security-Policy", contentSecurityPolicyHeaderValue);

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set("Content-Security-Policy", contentSecurityPolicyHeaderValue);
  return response;
}
