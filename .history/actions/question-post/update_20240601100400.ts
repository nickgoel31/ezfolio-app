"use server"

import { questionPostSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"

export const updateQuestionPostInDB = async (description:string, questionPostId:string) => {
    const {title,description} = validatedValues.data

    const post = await db.questionPost.create({
        data:{
            title,
            description,
            userId,
            solved:false
        }
    })

    return post;
}