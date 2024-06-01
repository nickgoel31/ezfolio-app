"use server"

import { db } from "@/lib/db"

export const getAnswersByQuestionPosts = async () => {
    const posts = await db.questionPost.findMany()

    return posts
}
