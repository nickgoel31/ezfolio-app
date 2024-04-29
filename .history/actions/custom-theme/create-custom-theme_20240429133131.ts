"use server"

import { db } from "@/lib/db"

export const createCustomTheme = async (userPageId: string) => {
    const theme = await db.customUserPageTheme.findUnique({
        where:{
            userPageId
        }
    })

    return theme;
}