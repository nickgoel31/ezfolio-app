"use server"

import { registerFormSchema } from "@/form-schemas"
import { z } from "zod"

export const register = (values: z.infer<typeof registerFormSchema>) => {

}