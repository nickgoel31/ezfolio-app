"use server"

import { db } from "@/lib/db"

export const getAllAdvancedPortfolioThemes = async () => {
    const advs = await db.advancedPortfolioTheme.findMany()

    return advs;
}

export const getAdvancedPortfolioThemeOfUserPage = async (id: number | null) => {
    if(!id) return null;
    const adv = await db.advancedPortfolioTheme.findUnique({
        where:{
            id
        }
    })

    return adv;
}

export const getAdvancedPortfolioThemeColorOfAPTheme = async (id: number) => {
    const color = await db.advancedPortfolioThemeColor.findUnique({
        where:{
            id
        }
    })

    return color;
}