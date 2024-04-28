"use server"

import { db } from "@/lib/db"

export const deleteAccountFromDatabase = async (userId:string) => {
    await db.user.delete({
        where:{
            id:userId
        }
    })
}