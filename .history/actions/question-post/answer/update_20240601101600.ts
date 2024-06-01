"use server"

import { questionPostSchema } from "@/form-schemas"
import { getCurrentUser } from "@/helpers/get-user"
import { db } from "@/lib/db"
import { z } from "zod"

export const updateAnswerInDB = async (description:string, answerId:string,answerUserId:string) => {
    const user = await getCurrentUser()
    if(!user) return {error:"Not able to authenticate user"}

    if(answerUserId !== user.id){
        return {error: "UNAUTHORIZED USER"}
    }

    await db.answer.update({
        where:{
            id:answerId
        },
        data:{
            answer:description,
        }
    })

    return {success:"Saved in Database"}

}