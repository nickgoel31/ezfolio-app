"use server"

import { db } from "@/lib/db"

export const getAnswersByQuestionPostId = async () => {
    const answerss = await db.questionPost.findMany()

    return posts
}
