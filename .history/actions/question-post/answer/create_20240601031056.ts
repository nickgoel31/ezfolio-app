"use server"

import { answerSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"

export const createQuestionPostInDB = async (values: z.infer<typeof answerSchema>, questionPostId:string, userId:string) => {
    const validatedValues = answerSchema.safeParse(values)
    if(!validatedValues.success) return;
    const {answer} = validatedValues.data

    const post = await db.answer.create({
        data:{
            answer,
            questionPostId,
            userId
        }
    })

    return post;
}