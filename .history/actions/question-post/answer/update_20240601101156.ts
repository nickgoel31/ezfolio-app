"use server"

import { questionPostSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"

export const updateAnswerInDB = async (description:string, PostId:string) => {

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