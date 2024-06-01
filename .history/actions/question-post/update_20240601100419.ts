"use server"

import { questionPostSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"

export const updateQuestionPostInDB = async (description:string, questionPostId:string) => {

    await db.questionPost.update({
        data:{
            description,
            userId,
            solved:false
        }
    })

    return post;
}