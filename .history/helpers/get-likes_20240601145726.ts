"use server"

import { db } from "@/lib/db"

export const getLikesForQuestionPost = (questionPostId:string) => {
    const likes = db.like.fin
}