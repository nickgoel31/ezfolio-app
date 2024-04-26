"use server"

import { db } from "@/lib/db"

export const updateLayoutOfUserPage = async (layoutId:number, id:string) => {
    await db.userPage.update({
        where:{id},
        data:{
            layoutId
        }
    })
}

