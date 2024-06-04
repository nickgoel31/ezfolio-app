"use server"

import { questionPostSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"

export const likeQuestionPostInDB = async (questionPostId:string,userId:string) => {

    await db.like.create({
        data:{
            userId,
            l
        }
    })

    return {success:"Saved in Database"}

}