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

    const isConnectRoute = nextUrl.pathname.startsWith("/connect")

    const isShowcaseRoutes = nextUrl.pathname.startsWith('/s/')

    const isApiRoute = nextUrl.pathname.startsWith(apiRoutes)

    console.log(nextUrl.pathname)

    if(isApiRoute) {
        return;
    }

    if(isConnectRoute){

        return;
    }


    if(!isLoggedIn && !isPublicRoute && !isUserPageRoute && !isShowcaseRoutes){
        return NextResponse.redirect(new URL('/login', request.url))
    }

    if(isLoggedIn){
        if(isAuthRoute){
            // Construct the redirect URL with the original pathname as query parameter
      const redirectUrl = new URL(request.url);
      redirectUrl.searchParams.set('redirectUrl', nextUrl.pathname);

      // Redirect to the `/d/redirect` route with the redirectUrl query
      return NextResponse.redirect(redirectUrl);
        }
    }
    
    return;
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}