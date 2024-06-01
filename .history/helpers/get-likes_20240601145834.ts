"use server"

import { db } from "@/lib/db"

export const getLikesForQuestionPost = (questionPostId:string) => {
    const likes = db.like.findMany({where:{
        likedEntityId: questionPostId,
        likedEntityType: 'QUESTION_POST'
    }})

    return likes
}

export const getLikesForAnswers = (answerId:string) => {
    const likes = db.like.findMany({where:{
        likedEntityId: answer,
        likedEntityType: 'QUESTION_POST'
    }})

    return likes
}

