"use server"

import { db } from "@/lib/db"

export const getAllFonts = async () => {
    const fonts = await db.pageFont.findMany()

    return fonts;
}

export const getFontOfUserPage = async (id: number) => {
    const font = await db.pageFont.findUnique({
        where:{
            id
        }
    })

    return font;
}