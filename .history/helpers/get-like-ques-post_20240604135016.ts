"use server"

import { db } from "@/lib/db"

export const isPostLikedByUser = async (userId:string,questionId:string) => {
    const existingLike = await db.like.findFirst({
        where:{
            likedEntityId:questionPostId,
            likedEntityType:"QUESTION_POST",
            userId,
        }
    })

    return exps;
}