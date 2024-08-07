"use server"

import { changePasswordFormSchema } from "@/form-schemas"
import { getUserByEmail } from "@/helpers/get-user";
import { z } from "zod"
import bcryptjs from "bcryptjs"
import { db } from "@/lib/db";
import { deletePasswordResetTokenByToken } from "../auth/password-reset";
import { deleteEmailVerificationTokenByToken } from "../auth/email-verification";
import { checkEmailVerificationToken } from "@/helpers/check";
import { getEmailVerificationTokenByToken } from "@/helpers/get-email-verification";
import { getPasswordResetTokenByToken } from "@/helpers/get-password-reset-token";

export const updateUserPassword = async (values: z.infer<typeof changePasswordFormSchema>,email:string,token:string) => {
    const validatedFields = changePasswordFormSchema.safeParse(values);
    if(!validatedFields.success) return {error:"Something went wrong!"}

    const {password} = validatedFields.data;

    const user = await getUserByEmail(email);
    if(!user) return;

    const pasToken = await getPasswordResetTokenByToken(token)
    if(!pasToken) return;

    const isValidToken = pasToken.createdAt.getTime() + 1000 * 60 * 15 > Date.now() //15

    if(!isValidToken){
        deletePasswordResetTokenByToken(token)
        return {error: "Token expired, Please create a new one!"}
    }



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
    if(!user) return {error: "Either"}

    const isValidToken = checkEmailVerificationToken(token)
    if(!isValidToken) {
        deleteEmailVerificationTokenByToken(token)
        return {error: "Token expired, Please request a new one"}
    }

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
  