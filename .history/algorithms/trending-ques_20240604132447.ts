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

    // Sort aggregated likes in descending order and select top 5
    const sortedLikes = Array.from(likesMap.entries()).sort((a, b) => b[1] - a[1]).slice(0, 5);

    // Retrieve the questions for the top 5 liked posts
    const topQuestions = [];
    for (const [postId, likes] of sortedLikes) {
        const post = await db.questionPost.findOne({
            where: {
                id: postId
            }
        });
        if (post) {
            topQuestions.push(post.question); // Assuming the question field exists in the post object
        }
    }

    return topQuestions;

    
}