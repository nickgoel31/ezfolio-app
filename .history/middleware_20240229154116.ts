import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import auth from './auth';
import { apiRoutes, authRoutes, publicRoutes, userPageRoutes } from './routes';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const {nextUrl} = request
    const {authCookie} = auth()

    const isLoggedIn = !!authCookie;

    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)
    const isUserPageRoute = userPageRoutes.test(nextUrl.pathname);

    const isApiRoute = nextUrl.pathname.startsWith(apiRoutes)

    if(!isLoggedIn && !isPublicRoute && !isUserPageRoute){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if(isLoggedIn){
        if(isAuthRoute){
            return NextResponse.redirect(new URL('/d/redirect', request.url))
        }
    }

    if(isApiRoute) {
        return;
    }

    return;
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}