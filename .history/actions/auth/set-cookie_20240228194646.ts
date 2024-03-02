"use server"

import { cookies } from "next/headers"

export const setCookieInHeader = async (sessionId:string) => {
    try {
        cookies().set("devlinker_session", sessionId, {
            maxAge:   60 * 60 * 24 * 30,// one day in seconds
            httpOnly:true,
            secure:true,
        })
    } catch (error) {
        console.log(error)
    }
}