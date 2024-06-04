"use server"

import { db } from "@/lib/db"

export const relatedQuestionsAlgorithm = async (questionTitle:string) => {
    const keywords = questionTitle.split(" ")
    const posts = await db.questionPost.findMany()

    const relatedQuestions = posts.filter(question => {
        return keywords.some(keyword => question.title.includes(keyword))
    })
}