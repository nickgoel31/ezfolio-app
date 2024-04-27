"use server"

import { db } from "@/lib/db"

export const getAllAdvancedPortfolioThemes = async () => {
    const adv = await db.advancedPortfolioTheme.findMany()

    return adv;
}

export const getLayoutOfUserPage = async (id: number) => {
    const layout = await db.pageLayout.findUnique({
        where:{
            id
        }
    })

    return layout;
}