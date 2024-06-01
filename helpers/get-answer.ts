"use server"

import { db } from "@/lib/db"

export const getAnswersByQuestionPostId = async (questionPostId:string) => {
    const answers = await db.answer.findMany({where:{questionPostId}})

    return answers
}
