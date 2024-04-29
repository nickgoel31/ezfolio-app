"use server"

import { db } from "@/lib/db"
import { logout } from "../auth/logout"
import { getUserById } from "@/helpers/get-user"
import { getUserpageByUserId } from "../userpage/get-userpage"

export const deleteAccountFromDatabase = async (userId:string) => {
    const user = await getUserById(userId)
    if(!user) return {error:"User not found"}

    await db.user.delete({
        where:{
            id:userId
        }
    })

    const userpage = await getUserpageByUserId(user.username)
    if(!userpage) return {error:"User deleted successfully! Userpage not found! (This is not an error)"}

    await db.userPage.delete({
        where:{
            username:user.username
        }
    })

    await db.project.deleteMany({{)}

    logout()

    return {success: "Account Deleted"}
}