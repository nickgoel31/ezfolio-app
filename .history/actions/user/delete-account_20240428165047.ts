"use server"

import { db } from "@/lib/db"
import { logout } from "../auth/logout"

export const deleteAccountFromDatabase = async (userId:string) => {
    await db.user.delete({
        where:{
            id:userId
        }
    })

    logout()

    
}