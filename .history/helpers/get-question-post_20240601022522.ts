"use server"

import { db } from "@/lib/db"

export const getQuestionPosts = async (userPageId:string) => {
    const projects = await db.project.findMany({
        where:{
            userPageId
        }
    })
    return projects;
}