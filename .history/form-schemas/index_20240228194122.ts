import { z } from "zod";

const passwordRegex = /^(?=.*[a-z])/

export const registerFormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email(),
    password: z.string().regex(passwordRegex)
})

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
})
