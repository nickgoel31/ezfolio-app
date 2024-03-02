"use server"

import { db } from "@/lib/db"

export const getColorSchemeOfUserPage = async (id:number) => {
    const colorScheme = await db.colorScheme.findUnique({where:{id}})

    return colorScheme;
}

export const getAllColorSchemes = async () => {
    const schemes = await db.colorScheme.findMany()

    return schemes;
}