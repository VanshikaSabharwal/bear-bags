import { NextRequest, NextResponse } from 'next/server';
import { dataRouting } from '@/config/data-routing';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const prefix = dataRouting.admin.routePrefix;

  // Allow the login page and login API through without a session check
  if (pathname === `${prefix}/login` || pathname.startsWith('/api/admin/login')) {
    return NextResponse.next();
  }

  if (pathname.startsWith(prefix) || pathname.startsWith('/api/admin/')) {
    const session = request.cookies.get(dataRouting.admin.sessionCookieName);
    if (!session || session.value !== process.env.ADMIN_PASSWORD) {
      return NextResponse.redirect(new URL(`${prefix}/login`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
