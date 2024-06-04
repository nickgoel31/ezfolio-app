"use server"

import { db } from "@/lib/db"

export const get = async (userPageId:string) => {
    const exps = await db.award.findMany({where:{userPageId}})

    return exps;
}