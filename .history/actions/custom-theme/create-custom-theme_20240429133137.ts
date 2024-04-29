"use server"

import { db } from "@/lib/db"

export const createCustomUserpageTheme = async (userPageId: string) => {
    const theme = await db.customUserPageTheme.findUnique({
        where:{
            userPageId
        }
    })

    return theme;
}