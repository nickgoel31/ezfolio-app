"use server"

import { db } from "@/lib/db"
import { logout } from "../auth/logout"
import { getUserById } from "@/helpers/get-user"

export const deleteAccountFromDatabase = async (userId:string) => {
    const user = await getUserById(userId)
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