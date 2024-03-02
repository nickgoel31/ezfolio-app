"use server"

import { removeCookieFromHeader } from "./set-cookie"

export const logout = () => {
    removeCookieFromHeader()
}