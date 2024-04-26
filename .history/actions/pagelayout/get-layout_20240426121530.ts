"use server"

import { db } from "@/lib/db"

export const getAllLayouts = async () => {
    const layouts = await db.pageLayout.findMany()

    return layouts;
}

export const getLayoutOfUserPage = async (id: number) => {
    const layout = await db.pageLayout.findUnique({
        where:{
            id
        }
    })

    return font;
}