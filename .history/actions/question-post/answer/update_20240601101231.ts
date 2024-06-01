"use server"

import { questionPostSchema } from "@/form-schemas"
import { getCurrentUser } from "@/helpers/get-user"
import { db } from "@/lib/db"
import { z } from "zod"

export const updateAnswerInDB = async (description:string, answerId:string) => {
    const user = await getCurrentUser()
    if(!user) return;

    if()

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