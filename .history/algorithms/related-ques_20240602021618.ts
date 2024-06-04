import { db } from "@/lib/db"

export const relatedQuestionsAlgorithm = (questionTitle:string) => {
    const keywords = questionTitle.split(" ")
    const relatedQuestions = db.questionPost.filter(question => {
        return keywords.some(keyword => question.title.includes(keyword))
    })
}