import { NextRequest, NextResponse } from "next/server";
import {
  LINE_REDIRECTS,
  getProductLineRedirects,
  matchRedirect,
  resolveRedirectUrl,
  stripRedirectPath,
} from "./src/lib/product-line-redirects";

const REDIRECT_CACHE_MS = 5 * 60 * 1000;

let redirectCache: { expires: number; rows: Awaited<ReturnType<typeof getProductLineRedirects>> } | null =
  null;

function shouldSkipRedirectLookup(pathname: string): boolean {
  return pathname.startsWith("/_next") || pathname.startsWith("/api/");
}

function redirectTo(request: NextRequest, destination: string, permanent: boolean) {
  const url = resolveRedirectUrl(request.nextUrl, destination);

  if (!url) {
    return null;
  }

  return NextResponse.redirect(url, permanent ? 308 : 307);
}

async function loadWpRedirects() {
  const now = Date.now();

  if (redirectCache && now <= redirectCache.expires) {
    return redirectCache.rows;
  }

  const rows = await getProductLineRedirects();
  redirectCache = { expires: now + REDIRECT_CACHE_MS, rows };
  return rows;
}

export async function middleware(request: NextRequest) {
  const pathname = stripRedirectPath(request.nextUrl.pathname);

  try {
    if (!shouldSkipRedirectLookup(pathname)) {
      const hardcoded = matchRedirect(LINE_REDIRECTS, pathname, request.nextUrl.searchParams);

      if (hardcoded) {
        const response = redirectTo(request, hardcoded.destination, hardcoded.permanent);

        if (response) {
          return response;
        }
      }

      const rows = await loadWpRedirects();
      const matched = matchRedirect(rows, pathname, request.nextUrl.searchParams);

      if (matched) {
        const response = redirectTo(request, matched.destination, matched.permanent);

        if (response) {
          return response;
        }
      }
    }
  } catch (error) {
    console.warn("[redirects] middleware:", error);
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

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
