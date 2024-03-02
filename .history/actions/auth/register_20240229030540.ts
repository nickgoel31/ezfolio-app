"use server"

import { loginFormSchema, registerFormSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"
import bcryptjs from "bcryptjs"
import { getUserByEmail, getUserByUsername } from "@/helpers/get-user"
import { login } from "./login"
import { bannedWords, reservedWords } from "@/data"
import { User } from "@prisma/client"



export const register = async (values: z.infer<typeof registerFormSchema>) => {

    const validatedFields = registerFormSchema.safeParse(values)

    if(!validatedFields.success) return {error: "Something went wrong"}

    const {email,password,username} = validatedFields.data

    const lowerUsername = username.toLowerCase()

    

    const existingUserByEmail:User | null = await getUserByEmail(email)
    const existingUserByUsername:User | null = await getUserByUsername(username)


    if(bannedWords.includes(lowerUsername)){
        return {error: "Can't have username with profanity!"}
    }
    if(reservedWords.includes(lowerUsername)){
        return {error: "Can't have reserved usernames!"}
    }

    if(existingUserByUsername?.username === lowerUsername){
        return {error: "Username already in use."}
    }

    if(existingUserByEmail?.email === email){
        return {error: "Email already in use."}
    }
    

    const hashedPassword = await bcryptjs.hash(password, 10)


    try {
        await db.user.create({
            data:{
                username,
                email,
                hashedPassword
            }
        })
    } catch (error) {
        console.log(error)
    }

    // const loginFields: z.infer<typeof loginFormSchema> = {email,password} 

    // login(loginFields);

    return {success: "User created!"}

}