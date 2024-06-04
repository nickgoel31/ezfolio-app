import { db } from "@/lib/db"

export const relatedQuestionsAlgorithm = async (questionTitle:string) => {
    const keywords = questionTitle.split(" ")
    const posts = await db
}