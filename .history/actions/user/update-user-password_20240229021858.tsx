"use server"

import { changePasswordFormSchema } from "@/form-schemas"
import { z } from "zod"

export const updateUserPassword = (values: z.infer<typeof changePasswordFormSchema>,email:string) => {
    const validatedFields = changePasswordFormSchema.safeParse(values);
    if(!validatedFields.success) return {error:"Something went wrong!"}

    const {password} = validatedFields.data

}
  