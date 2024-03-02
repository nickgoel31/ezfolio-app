"use server"

import { loginFormSchema, registerFormSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"
import bcryptjs from "bcryptjs"
import { getUserByEmail } from "@/helpers/get-user"
import { login } from "./login"

export const register = async (values: z.infer<typeof registerFormSchema>) => {

    const validatedFields = registerFormSchema.safeParse(values)

    if(!validatedFields.success) return {error: "Something went wrong"}

    const {email,password,username} = validatedFields.data

    const existingUser = await getUserByEmail(email)
    if(existingUser?.email === email || existingUser?.username === username){
        return {error: "Username or Email already in use."}
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