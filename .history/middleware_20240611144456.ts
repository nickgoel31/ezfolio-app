import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import auth from './auth';
import { apiRoutes, authRoutes, publicRoutes, userPageRoutes } from './routes';
import { getValidSubdomain } from '@/utils/getvalidsubdomain';

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/; // Files
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const {nextUrl} = request
    const {authCookie} = auth()
    const url = nextUrl.clone()

    // Skip public files
    if (PUBLIC_FILE.test(url.pathname) || url.pathname.includes('_next')) return;

    const host = request.headers.get('host');
    const subdomain = getValidSubdomain(host);
    if (subdomain) {
        // Subdomain available, rewriting
        console.log(`>>> Rewriting: ${url.pathname} to /${subdomain}${url.pathname}`);
        url.pathname = `/${subdomain}${url.pathname}`;
    }

    const isLoggedIn = !!authCookie;

    const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)
    const isUserPageRoute = userPageRoutes.test(nextUrl.pathname);

    const isConnectRoute = nextUrl.pathname.startsWith("/connect")

    const isShowcaseRoutes = nextUrl.pathname.startsWith('/s/')

    const isApiRoute = nextUrl.pathname.startsWith(apiRoutes)

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
            return NextResponse.redirect(new URL('/d/redirect', request.url))
        }
    }
    
    return NextResponse.rewrite(url);
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}