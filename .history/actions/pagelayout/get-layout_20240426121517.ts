"use server"

import { db } from "@/lib/db"

export const getAllLayouts = async () => {
    const layouts = await db.pageLayout.findMany()

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