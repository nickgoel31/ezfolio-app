"use server"

import { changePasswordFormSchema } from "@/form-schemas"
import { getUserByEmail } from "@/helpers/get-user";
import { z } from "zod"
import bcryptjs from "bcryptjs"

export const updateUserPassword = async (values: z.infer<typeof changePasswordFormSchema>,email:string) => {
    const validatedFields = changePasswordFormSchema.safeParse(values);
    if(!validatedFields.success) return {error:"Something went wrong!"}

    const {password} = validatedFields.data;

    const user = getUserByEmail(email);
    if(!user) return;

    const hashedPassword = await bcryptjs.hash(password,10)

}
  