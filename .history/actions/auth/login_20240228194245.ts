"use server"

import { loginFormSchema,} from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"
import bcryptjs from "bcryptjs"
import { getUserByEmail } from "@/helpers/get-user"

export const login = async (values: z.infer<typeof loginFormSchema>) => {

    const validatedFields = loginFormSchema.safeParse(values)

    if(!validatedFields.success) return {error: "Something went wrong"}

    const {email,password} = validatedFields.data

    const existingUser = await getUserByEmail(email)
    if(existingUser?.email === email){
        return {error: "Username or Email already in use."}
    }

    const hashedPassword = await bcryptjs.hash(password, 10)

    return {success: "Logged in!"}

}