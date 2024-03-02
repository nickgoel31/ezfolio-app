"use server"

import { NextResponse } from "next/server"
import { removeCookieFromHeader } from "./set-cookie"
import { URL } from "url"

export const logout = () => {
    removeCookieFromHeader()

    return NextResponse.redirect(new URL("/showcase"))
}