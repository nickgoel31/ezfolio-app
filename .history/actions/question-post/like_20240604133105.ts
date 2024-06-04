"use server"

import { questionPostSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"

export const likeQuestionPostInDB = async (description:string, questionPostId:string) => {

    await db.questionPost.update({
        where:{
            id:questionPostId
        },
        data:{
            description,
        }
    })

    return {success:"Saved in Database"}

}