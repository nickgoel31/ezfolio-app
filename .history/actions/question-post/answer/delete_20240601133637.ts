"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const deleteAnswerFromDatabase = async (answerId:string) => {
    await db.answer.delete({where:{id:answerId}})

    revalidatePath("/")
}