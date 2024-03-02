import { z } from "zod";

const passwordRegex = /^(?=.*[a-z])/

const profanities = [
  'fuck',
  'shit',
  'asshole',
  'bitch',
  'damn',
  'cunt',
  'bastard',
  // Add more profane words as needed
];

const usernameRegex = /^(?!.*(?:dashboard|showcase|d|s|home|about|admin))(?!.*(?:${profanities.join('|')}))(?=.*[a-z])/i;


export const registerFormSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }).regex(usernameRegex),
    email: z.string().email(),
    password: z.string().regex(passwordRegex).min(6)
})

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
})


export const onBoardingSchema = z.object({
  pageTitle: z.string().max(20),
  pageBio: z.string().max(256)

})

export const resetPasswordFormSchema = z.object({
  email: z.string().email()
})

export const changePasswordFormSchema = z.object({
  password: z.string().regex(passwordRegex).min(6),
})