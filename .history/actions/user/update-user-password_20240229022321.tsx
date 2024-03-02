"use server"

import { changePasswordFormSchema } from "@/form-schemas"
import { getUserByEmail } from "@/helpers/get-user";
import { z } from "zod"
import bcryptjs from "bcryptjs"
import { db } from "@/lib/db";
import { deletePasswordResetTokenByToken } from "../auth/password-reset";

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
  