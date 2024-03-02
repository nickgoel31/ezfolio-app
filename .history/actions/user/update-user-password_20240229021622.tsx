"use server"

import { changePasswordFormSchema } from "@/form-schemas"
import { z } from "zod"

export const updateUserPassword = (values: z.infer<typeof changePasswordFormSchema>) => {

}
  