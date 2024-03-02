"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const deleteExperienceInDB = async (id:string) => {

    await db.experience.delete({
        where:{
            id
        }
    })

    revalidatePath("/")
}