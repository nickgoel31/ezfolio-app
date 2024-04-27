"use server"

import { db } from "@/lib/db"

export const getAllAdvancedPortfolioThemes = async () => {
    const advs = await db.advancedPortfolioTheme.findMany()

    return advs;
}

export const getLayoutOfUserPage = async (id: number) => {
    const adv = await db.pageLayout.findUnique({
        where:{
            id
        }
    })

    return layout;
}