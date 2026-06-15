import { NextRequest, NextResponse } from 'next/server';
import { dataRouting } from '@/config/data-routing';

export async function POST(request: NextRequest) {
  const { password } = await request.json();

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  }

  const response = NextResponse.json({ success: true });
  response.cookies.set(dataRouting.admin.sessionCookieName, password, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: dataRouting.admin.sessionMaxAgeSeconds,
    secure: process.env.NODE_ENV === 'production',
  });

  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ success: true });
  response.cookies.delete(dataRouting.admin.sessionCookieName);
  return response;
}
