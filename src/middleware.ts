import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const locales = ["ru", "en", "uz"];
export const defaultLocale = "ru";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    '/((?!_next|images|api|favicon.ico).*)',
  ],
};
