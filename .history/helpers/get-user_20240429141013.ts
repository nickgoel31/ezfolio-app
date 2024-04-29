"use server"

import { getCookieFromHeader } from "@/actions/auth/set-cookie";
import { db } from "@/lib/db"
import { getSessionBySessionId } from "./get-session";

export const getUserByEmail = async (email:string) => {
    const user = await db.user.findUnique({
        where:{
            email
        }
    })

    return user;
}

export const getUserByUsername = async (username:string) => {
    const user = await db.user.findUnique({
        where:{
            username
        }
    })
    return user;
}

export const getUserById = async (id:string) => {
    const user = await db.user.findUnique({
        where:{
            id
        }
    })
    return user;
}

export const getCurrentUser = async () => {
    const cookie = await getCookieFromHeader()
    if(!cookie) return;

    const session = await getSessionBySessionId(cookie.value)
    if(!session) {
        logout();
        return;
    }

    const user = await getUserById(session.userId);

    return user;
}