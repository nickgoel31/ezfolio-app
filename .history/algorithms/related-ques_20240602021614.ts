import { db } from "@/lib/db"

export const relatedQuestionsAlgorithm = (questionTitle:string) => {
    const keywords = questionTitle.split(" ")
    const relatedQuestions = db.questions.filter(question => {
        return keywords.some(keyword => question.title.includes(keyword))
    })
}