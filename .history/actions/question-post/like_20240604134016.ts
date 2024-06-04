"use server"

import { questionPostSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export const likeQuestionPostInDB = async (questionPostId:string,userId:string) => {

    const existingLike = await db.like.findFirst({
        where:{
            likedEntityId:questionPostId,
            likedEntityType:"QUESTION_POST",
            userId,
        }
    })

    if(existingLike) {
        await db.like.delete({
            where:{
                id: existingLike.id
                userId,
                likedEntityId:questionPostId,
                likedEntityType:"QUESTION_POST"
            }
        })
    }

    await db.like.create({
        data:{
            userId,
            likedEntityId:questionPostId,
            likedEntityType:"QUESTION_POST"
        }
    })

    revalidatePath("/")

    return {success:"Saved in Database"}

}