"use server"

import { db } from "@/lib/db"

export const updateFontOfUserPage = async (fontId:number, id:string) => {
    await db.userPage.update({
        where:{id},
        data:{
            fontId
        }
    })
}

export const updateFontWeightOfUserPage = async (fontWeight:number, id:string) => {
    await db.userPage.update({
        where:{id},
        data:{
            fontWeight
        }
    })
}