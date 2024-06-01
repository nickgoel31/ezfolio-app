"use server"

import { answerSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export const createAnswerForQuestionPostInDB = async (values: z.infer<typeof answerSchema>, questionPostId:string, userId:string) => {
    const validatedValues = answerSchema.safeParse(values)
    if(!validatedValues.success) return;
    const {answer} = validatedValues.data

    const answerPost = await db.answer.create({
        data:{
            answer,
            questionPostId,
            userId
        }
    })

    revalidatePath("/")
    return answerPost;
}