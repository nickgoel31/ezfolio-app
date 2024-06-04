import { db } from "@/lib/db"

export const trendingQuestionsAlgorithm = async () => {
    const likes = await db.like.findMany({
        where:{
            likedEntityType: ""
        }
    })
}