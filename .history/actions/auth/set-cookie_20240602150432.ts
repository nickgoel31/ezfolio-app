"use server"

import { cookies } from "next/headers"


var authCookie = "devlinker_session"
var twoFactorAuthId = "tfa_suc_sent_id_temp"

export const setCookieInHeader = async (sessionId:string) => {
    try {
        cookies().set(authCookie, sessionId, {
            maxAge:   60 * 60 * 24 * 30,// one day in seconds
            httpOnly:true,
            secure:true,
        })
    } catch (error) {
        console.log(error)
    }
}

export const set2FACookieInHeader = async (tokenId:string) => {
    try {
        cookies().set(twoFactorAuthId, tokenId, {
            maxAge:   60 * 60 * 24 * 30,// one day in seconds
            httpOnly:true,
            secure:true,
        })
    } catch (error) {
        console.log(error)
    }
}

export const delete2FACookieFromHeader = async () => {
    try {
        cookies().delete(twoFactorAuthId)
    } catch (error) {
        console.log(error)
    }
}

export const get2FACookieFromHeader = async () => {
    try {
        const cookie = cookies().get(authCookie)
        return cookie;
    } catch (error) {
        console.log(error)
    }
}


export const removeCookieFromHeader = async () => {
    try {
        cookies().delete(authCookie)
    } catch (error) {
        console.log(error)
    }
}

export const getCookieFromHeader = async () => {
    try {
        const cookie = cookies().get(authCookie)
        return cookie;
    } catch (error) {
        console.log(error)
    }
}