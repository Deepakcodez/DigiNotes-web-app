import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/auth/login' || path === '/auth/signup';
    const token = request.cookies.get("token")?.value || "";
    



    if (path === '/' && token) {
        return NextResponse.redirect(new URL('/home', request.nextUrl.origin).toString());
    }

    if(path === '/' && !token){
        return NextResponse.redirect(new URL('/welcome', request.nextUrl.origin).toString());
    }
    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/home', request.nextUrl.origin).toString());
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/auth/login', request.nextUrl.origin).toString());
    }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/auth/:path*',
    '/',
    '/home/:path*',
  ],
};
