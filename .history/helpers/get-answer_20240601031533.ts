"use server"

import { db } from "@/lib/db"

export const getAnswersByQuestionPostId = async () => {
    const answers = await db.answer.findMany({where:{}})

    return answers
}
