import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import auth from './auth';
import { publicRoutes } from './routes';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const {nextUrl} = request
    const {authCookie} = auth()

    const isLoggedIn = !!authCookie;

    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)

    if(!isLoggedIn && !isPublicRoute){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return;
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}