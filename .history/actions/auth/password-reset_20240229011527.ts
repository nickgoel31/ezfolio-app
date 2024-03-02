"use server"

import { resetPasswordFormSchema } from "@/form-schemas"
import { getUserByEmail } from "@/helpers/get-user";
import { z } from "zod"

export const sendResetPasswordLink = async (values: z.infer<typeof resetPasswordFormSchema>) => {

    const validatedFields = resetPasswordFormSchema.safeParse(values);
    if(!validatedFields.success) return {error:"Something went wrong"}

    const {email} = validatedFields.data;

    const user = await getUserByEmail(email);
    if(!user) return {error: "Email not associated with any account!"}


}