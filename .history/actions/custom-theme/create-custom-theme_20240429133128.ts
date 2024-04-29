"use server"

import { db } from "@/lib/db"

export const createCustom = async (userPageId: string) => {
    const theme = await db.customUserPageTheme.findUnique({
        where:{
            userPageId
        }
    })

    return theme;
}