import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import auth from './auth';
import { apiRoutes, authRoutes, publicRoutes, userPageRoutes } from './routes';

export function middleware(request: NextRequest) {
    const { nextUrl } = request;
    const { authCookie } = auth();
    const isLoggedIn = !!authCookie;
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);
    const isUserPageRoute = userPageRoutes.test(nextUrl.pathname);
    const isConnectRoute = nextUrl.pathname.startsWith("/connect");
    const isShowcaseRoutes = nextUrl.pathname.startsWith('/s/');
    const isApiRoute = nextUrl.pathname.startsWith(apiRoutes);

    console.log(nextUrl.pathname);

    if (isApiRoute || isConnectRoute) {
        return;
    }

    if (!isLoggedIn && !isPublicRoute && !isUserPageRoute && !isShowcaseRoutes) {
        // Add the redirectUrl as a query parameter if accessing auth routes without being logged in
        return NextResponse.redirect(new URL(`/login?redirectUrl=${encodeURIComponent(nextUrl.pathname)}`, request.url));
    }
    if (!isLoggedIn && !isPublicRoute && !isUserPageRoute && !isShowcaseRoutes) {
        // Add the redirectUrl as a query parameter if accessing auth routes without being logged in
        return NextResponse.redirect(new URL(`/login?redirectUrl=${encodeURIComponent(nextUrl.pathname)}`, request.url));
    }

    if (isLoggedIn) {
        if (isAuthRoute) {
            // Add the redirectUrl as a query parameter if accessing auth routes while logged in
            return NextResponse.redirect(new URL(`/d/redirect?redirectUrl=${encodeURIComponent(nextUrl.pathname)}`, request.url));
        }
    }

    return;
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
