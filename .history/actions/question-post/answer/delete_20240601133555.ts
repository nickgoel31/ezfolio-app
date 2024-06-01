"use server"

import { db } from "@/lib/db"

export const deleteAnswerFromDatabase = async (answerId:string) => {
    await db.answer.delete({where:answerId})
}