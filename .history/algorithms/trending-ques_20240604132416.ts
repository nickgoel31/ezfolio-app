"use server"

import { db } from "@/lib/db"

export const trendingQuestionsAlgorithm = async () => {
    const likesRelatedToPosts = await db.like.findMany({
        where:{
            likedEntityType: "QUESTION_POST"
        }
    })

    // Create a map to aggregate likes for each question post
    const likesMap = new Map();
    for (const like of likesRelatedToPosts) {
        const postId = like.likedEntityId;
        const likes = likesMap.get(postId) || 0;
        likesMap.set(postId, likes + 1);
    }

    

    
}