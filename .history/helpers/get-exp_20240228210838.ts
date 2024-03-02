"use server"

import { db } from "@/lib/db"

export const getExperienceByUserPageId = async (userPageId:string) => {
    const exps = await db.experience.findMany({where:{userPageId}})

    return exps;
}