"use server"

import { questionPostSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"

export const updateQuestionPostInDV = async (values: z.infer<typeof questionPostSchema>, userId:string) => {
    const validatedValues = questionPostSchema.safeParse(values)
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