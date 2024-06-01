"use server"

import { db } from "@/lib/db"

export const getAnswersQuestionPosts = async () => {
    const posts = await db.questionPost.findMany()

    return posts
}
