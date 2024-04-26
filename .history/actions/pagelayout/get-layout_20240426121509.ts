"use server"

import { db } from "@/lib/db"

export const getAllLayouts = async () => {
    const fonts = await db.pageFont.findMany()

    return fonts;
}

export const getLayoutOfUserPage = async (id: number) => {
    const font = await db.pageFont.findUnique({
        where:{
            id
        }
    })

    return font;
}