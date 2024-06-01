"use server"

import { questionPostSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"

export const createQuestionPostInDB = async (values: z.infer<typeof questionPostSchema>, userId:string) => {
    const validatedValues = questionPostSchema.safeParse(values)
    const {} = validatedValues

    await db.questionPost.create({
        data:{
            title: values.title,
            description: values.description,
            userId: userId
        }
    })
}