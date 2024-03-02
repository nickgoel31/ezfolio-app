"use server"

import { db } from "@/lib/db"

export const getUserpage = async (username:string) => {
    const userPage = await db.userPage.findUnique({
        where:{
            username
        }
    })

    return userPage;
}