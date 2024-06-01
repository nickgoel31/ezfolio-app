"use server"

import { db } from "@/lib/db"

export const getQuestionPosts = async () => {
    const posts = await db.questionPost.findMany()

    return posts
}

export const getQuestionPostById = async () => {
    const posts = await db.questionPost.findMany()

    return posts
}