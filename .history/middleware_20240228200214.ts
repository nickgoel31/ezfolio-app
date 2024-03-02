import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import auth from './auth';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const {nextUrl} = request
    const {authCookie} = auth()

    const isLoggedIn = !!authCookie;

  return;
}
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}