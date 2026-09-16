import { NextRequest, NextResponse } from "next/server";
import { getProductLineRedirects } from "./src/lib/product-line-redirects";

const REDIRECT_CACHE_MS = 5 * 60 * 1000;

let redirectCache: {
  expires: number;
  byPath: Map<string, { destination: string; permanent: boolean }>;
} | null = null;

function stripTrailingSlash(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname;
}

async function lookupProductLineRedirect(pathname: string) {
  const path = stripTrailingSlash(pathname);

  if (!path.startsWith("/produtos") && !path.startsWith("/linhas")) {
    return null;
  }

  const now = Date.now();

  if (!redirectCache || now > redirectCache.expires) {
    const rows = await getProductLineRedirects();
    const byPath = new Map<string, { destination: string; permanent: boolean }>();

    for (const row of rows) {
      if (row.has?.length) {
        continue;
      }

      byPath.set(stripTrailingSlash(row.source), {
        destination: row.destination,
        permanent: row.permanent,
      });
    }

    redirectCache = { expires: now + REDIRECT_CACHE_MS, byPath };
  }

  return redirectCache.byPath.get(path) ?? null;
}

export async function middleware(request: NextRequest) {
  const productLineRedirect = await lookupProductLineRedirect(request.nextUrl.pathname);

  if (productLineRedirect) {
    return NextResponse.redirect(
      productLineRedirect.destination,
      productLineRedirect.permanent ? 301 : 302,
    );
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
  // Substituir caracteres de nova linha e espaços
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
