"use server"

import { NextRequest, NextResponse } from "next/server"
import { removeCookieFromHeader } from "./set-cookie"
import { URL } from "url"

export const logout = async () => {
    removeCookieFromHeader()

    const nextUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://ezfolio.social';
    const redirectUrl = new URL("/showcase", nextUrl);

    return NextResponse.redirect(redirectUrl)
}