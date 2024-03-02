"use server"

import { getUserById } from "@/helpers/get-user"
import { db } from "@/lib/db";

export const uploadImageOfUserById = async (id:string | undefined,imageUrl:string | undefined | null) => {
    if(!id) return;
    if(!imageUrl) return;
    const user = await getUserById(id)
    if(!user) return;

    try {
        await db.userPage.update({
            where:{
                username: user.username
            },
            data:{
                pagePicUrl: imageUrl 
            }
        })
    } catch (error) {
        console.log(error)
    }
}