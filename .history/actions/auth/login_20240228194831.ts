"use server"

import { loginFormSchema,} from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"
import bcryptjs from "bcryptjs"
import { getUserByEmail } from "@/helpers/get-user"
import { setCookieInHeader } from "./set-cookie"

export const login = async (values: z.infer<typeof loginFormSchema>) => {

    const validatedFields = loginFormSchema.safeParse(values)

    if(!validatedFields.success) return {error: "Something went wrong"}

    const {email,password} = validatedFields.data

    const existingUser = await getUserByEmail(email)
    if(!existingUser) return;

    const isCorrectPassword = await bcryptjs.compare(password, existingUser.hashedPassword)

    await db.userSession.create({
        data:{
            userId: existingUser.id
        }
    })

    const session = await db.userSession.findFirst({
        where:{
            userId: existingUser.id
        }
    })
    if(!session) return;

    setCookieInHeader(session.sessionId)

    return {success: "Logged in!"}

}