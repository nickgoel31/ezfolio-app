"use server"

import { db } from "@/lib/db"

export const createCustomUserpageTheme = async (userPageId: string,boil) => {
    const theme = await db.customUserPageTheme.create({
        data:{
            userPageId,
            htmlCode:
        }
    })
}