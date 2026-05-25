import { NextRequest, NextResponse } from 'next/server';
import { AUTH_COOKIE, decodeSession } from '@/lib/auth';

const protectedPaths = [
  '/dashboard',
  '/features',
  '/documents',
  '/profiles',
  '/reporting',
  '/statements',
  '/forecasting',
  '/budgeting',
  '/valuation',
  '/audit-compliance',
  '/tax-prep',
  '/tax-planning',
  '/expenses',
  '/policies-approvals',
  '/collections',
  '/payments-settlements',
  '/integrations',
  '/custom-views',
];

function isProtected(pathname: string) {
  return protectedPaths.some((path) => pathname === path || pathname.startsWith(`${path}/`));
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const user = decodeSession(request.cookies.get(AUTH_COOKIE)?.value);
  const hasSession = Boolean(user);

  if ((pathname === '/login' || pathname === '/') && hasSession) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  if (isProtected(pathname) && !hasSession) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/login', '/dashboard/:path*', '/features/:path*', '/documents/:path*', '/profiles/:path*', '/reporting/:path*', '/statements/:path*', '/forecasting/:path*', '/budgeting/:path*', '/valuation/:path*', '/audit-compliance/:path*', '/tax-prep/:path*', '/tax-planning/:path*', '/expenses/:path*', '/policies-approvals/:path*', '/collections/:path*', '/payments-settlements/:path*', '/integrations/:path*', '/custom-views/:path*'],
};
