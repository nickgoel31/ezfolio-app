"use server"

import { db } from "@/lib/db"
import { logout } from "../auth/logout"
import { getUserById } from "@/helpers/get-user"

export const deleteAccountFromDatabase = async (userId:string) => {
    const user = await getUserById(userId)
    if(!user) return {error:"User not found"}

    await db.user.delete({
        where:{
            id:userId
        }
    })

    const userpage = await 

    await db.userPage.delete({
        where:{
            username:user.username
        }
    })

    await db.project

    logout()

    return {success: "Account Deleted"}
}