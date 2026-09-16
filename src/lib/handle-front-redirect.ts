import { NextRequest, NextResponse } from "next/server";
import { getProductLineRedirects, matchRedirect, resolveRedirectUrl } from "@/lib/product-line-redirects";

export async function GET(request: NextRequest) {
  const rows = await getProductLineRedirects();
  const matched = matchRedirect(rows, request.nextUrl.pathname, request.nextUrl.searchParams);

  if (!matched) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const url = resolveRedirectUrl(request.nextUrl, matched.destination);

  if (!url) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return NextResponse.redirect(url, matched.permanent ? 301 : 302);
}

export const HEAD = GET;
