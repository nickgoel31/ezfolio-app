"use server"

import { changePasswordFormSchema } from "@/form-schemas"
import { getUserByEmail } from "@/helpers/get-user";
import { z } from "zod"
import bcryptjs from "bcryptjs"
import { db } from "@/lib/db";
import { deletePasswordResetTokenByToken } from "../auth/password-reset";
import { deleteEmailVerificationTokenByToken } from "../auth/email-verification";

export const updateUserPassword = async (values: z.infer<typeof changePasswordFormSchema>,email:string,token:string) => {
    const validatedFields = changePasswordFormSchema.safeParse(values);
    if(!validatedFields.success) return {error:"Something went wrong!"}

    const {password} = validatedFields.data;

    const user = await getUserByEmail(email);
    if(!user) return;

    const hashedPassword = await bcryptjs.hash(password,10)

    await db.user.update({
        where:{
            email,
            id: user.id,
            username: user.username
        },
        data:{
            hashedPassword
        }
    })

    await deletePasswordResetTokenByToken(token)

    return {success: "Password changed successfully! Please login with your new password."}

}

export const updateEmailVerified = async (email:string,token:string) => {

    const user = await getUserByEmail(email);
    if(!user) return {error: "Either the email is not registered or the token is invalid"}

    await db.user.update({
        where:{
            email,
            id: user.id,
            username: user.username
        },
        data:{
            emailVerified: true,
        }
    })

    deleteEmailVerificationTokenByToken(token)

    return {success: "Email Verified! you can now login to your account."}
}
  