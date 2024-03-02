"use server"

import { resetPasswordFormSchema } from "@/form-schemas"
import { getPasswordResetTokenByUserEmail } from "@/helpers/get-password-reset-token";
import { getUserByEmail } from "@/helpers/get-user";
import { db } from "@/lib/db";
import { z } from "zod"

export const sendResetPasswordLink = async (values: z.infer<typeof resetPasswordFormSchema>) => {

    const validatedFields = resetPasswordFormSchema.safeParse(values);
    if(!validatedFields.success) return {error:"Something went wrong"}

    const {email} = validatedFields.data;

    const user = await getUserByEmail(email);
    if(!user) return {error: "Email not associated with any account!"}

    const pst = await getPasswordResetTokenByUserEmail(email)
    if(pst){
        // If a token already exists, we'll delete that and create a new one
        await db.passwordResetToken.delete({
            where: {userEmail:email}
        })
    }

    await db.passwordResetToken.create({
        data:{
            userEmail:email
        }
    })

    return {success: "Password reset email sent to the email!"}

}



export const deletePasswordResetTokenByToken = async (token:string) => {
    await db.passwordResetToken.delete({
        where:{
            token
        }
    })
}