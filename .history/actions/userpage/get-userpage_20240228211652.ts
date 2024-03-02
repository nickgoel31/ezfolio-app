"use server"

import { db } from "@/lib/db"

export const getUserpageByUserId = async (username:string) => {
    const userPage = await db.userPage.findUnique({
        where:{
            username
        }
    })

    return userPage;
}

export const getUserpageByUserPageId = async (id:string) => {
    const userPage = await db.userPage.findUnique({
        where:{
            id
        }
    })

    return userPage;
}
