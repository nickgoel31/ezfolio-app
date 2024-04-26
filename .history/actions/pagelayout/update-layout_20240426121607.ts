"use server"

import { db } from "@/lib/db"

export const updateLayoutOfUserPage = async (fontId:number, id:string) => {
    await db.userPage.update({
        where:{id},
        data:{
            fontId
        }
    })
}

