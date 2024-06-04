import { db } from "@/lib/db"

export const trendingQuestionsAlgorithm = async () => {
    const likesRelatedToPosts = await db.like.findMany({
        where:{
            likedEntityType: "QUESTION_POST"
        }
    })

    const mostLikes = 
}