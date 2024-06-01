"use server"

import { answerSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"

export const createQuestionPostInDB = async (values: z.infer<typeof questionPostSchema>, userId:string) => {
    const validatedValues =tSchema.safeParse(values)
    if(!validatedValues.success) return;
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