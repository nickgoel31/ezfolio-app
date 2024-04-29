"use server"

import { db } from "@/lib/db"

export const getCustomUserpageTheme = async (userPageId: string) => {
    const theme = await db.customUserPageTheme.findUnique({
        where:{
            userPageId
        }
    })
}