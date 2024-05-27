"use server"

import { db } from "@/lib/db"

import { revalidatePath } from "next/cache"
import { getUserpageByUserId, getUserpageByUserPageId } from "../userpage/get-userpage"

export const addSkillsInDB = async (selSkills:string[],id:string) => {

    const userPage = await getUserpageByUserPageId(id)
    if(!userPage) return;

    try {
        await db.userPage.update({
            where:{
                id
            },
            data:{
                skills:selSkills
            }
        })
    } catch (error) {
        console.log(error)
    }

    revalidatePath("/")
}