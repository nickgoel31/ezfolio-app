"use server"

import { loginFormSchema, registerFormSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"
import bcryptjs from "bcryptjs"
import { getUserByEmail } from "@/helpers/get-user"
import { login } from "./login"
import { bannedWords } from "@/data"



export const register = async (values: z.infer<typeof registerFormSchema>) => {

    const validatedFields = registerFormSchema.safeParse(values)

    if(!validatedFields.success) return {error: "Something went wrong"}

    const {email,password,username} = validatedFields.data

    if(bannedWords.includes(username)){
        return {error: "Can't have that username"}
    }

    const existingUser = await getUserByEmail(email)

    if(existingUser?.username === username){
        return {error: "Username already in use."}
    }

    if(existingUser?.email === email){
        return {error: "Email already in use."}
    }
    

    const hashedPassword = await bcryptjs.hash(password, 10)


    await db.user.create({
        data:{
            username,
            email,
            hashedPassword
        }
    })

    const loginFields: z.infer<typeof loginFormSchema> = {email,password} 

    login(loginFields);

    return {success: "User created!"}

}