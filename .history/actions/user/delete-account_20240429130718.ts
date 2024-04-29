"use server"

import { db } from "@/lib/db"
import { logout } from "../auth/logout"

export const deleteAccountFromDatabase = async (userId:string) => {
    const user = await get
    await db.user.delete({
        where:{
            id:userId
        }
    })

    await db.userPage.delete({
        where:{
            username
        }
    })

    logout()

    return {success: "Account Deleted"}
}