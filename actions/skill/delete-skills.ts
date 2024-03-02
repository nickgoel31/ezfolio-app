"use server"

import { db } from "@/lib/db"

export const deleteSkillsInDB = async (skills:string[], userPageId:string) => {

    await db.userPage.update({
        where:{
            id:userPageId
        },
        data:{
            skills
        }
    })
}