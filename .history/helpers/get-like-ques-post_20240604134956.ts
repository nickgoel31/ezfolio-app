"use server"

import { db } from "@/lib/db"

export const isPostLikedByUser = async (userId:string,questionId:string) => {
    const exps = await db.award.findMany({where:{userPageId}})

    return exps;
}