"use server"

import { answerSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"

export const createQuestionPostInDB = async (values: z.infer<typeof answerSchema>, userId:string) => {
    const validatedValues = answerSchema.safeParse(values)
    if(!validatedValues.success) return;
    const {answer} = validatedValues.data

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