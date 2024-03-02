"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const updateColorSchemeOnUserPage = async (colorSchemeId:number,id:string) => {
    await db.userPage.update({
        where:{
            id
        },
        data:{
            colorSchemeId
        }
    })

    revalidatePath("/")
}