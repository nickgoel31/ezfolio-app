"use server"

import { questionPostSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"

export const likeQuestionPostInDB = async (questionPostId:string,userId:string) => {

    await db.like.create({
        data:{
            userId,
            likedEntityId:questionPostId,
            likedEntityType:"QUESTION_POST"
        }
    })

    return {success:"Saved in Database"}

}