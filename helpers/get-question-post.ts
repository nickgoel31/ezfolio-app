"use server"

import { db } from "@/lib/db"

export const getQuestionPosts = async () => {
    const posts = await db.questionPost.findMany()

    return posts
}

export const getQuestionPostById = async (id:string) => {
    const post = await db.questionPost.findUnique({where:{
        id
    }})

    return post
}