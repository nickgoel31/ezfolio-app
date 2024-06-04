"use server"

import { db } from "@/lib/db"

export const getEducationByUserPageId = async (userPageId:string) => {
    const exps = await db.experience.findMany({where:{userPageId}})

    return exps;
}