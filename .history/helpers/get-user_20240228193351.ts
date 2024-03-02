"use server"

import { db } from "@/lib/db"

export const getUserByEmail = async (email:string) => {
    await db.user.findUnique({
        where:{
            email
        }
    })
}

export const getUserByUsername = async (username:string) => {
    await db.user.findUnique({
        where:{
            username
        }
    })
}

export const getUserById = async (id:string) => {
    await db.user.findUnique({
        where:{
            id
        }
    })
}