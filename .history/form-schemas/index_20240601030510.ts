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

const usernameRegex = /^[a-zA-Z0-9_]{2,30}$/;


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
  pageTitle: z.string().max(20).min(2),
  pageBio: z.string().max(256).min(2),

})

export const resetPasswordFormSchema = z.object({
  email: z.string().email()
})

export const changePasswordFormSchema = z.object({
  password: z.string().regex(passwordRegex).min(6),
})

export const questionPostSchema = z.object({
  title: z.string().min(2, {message:"Title must be atleast 2 characters long"}).max(50),
  description: z.string().min(10,{message:"Description must be atleast 10 characters long"}).trim()
})

export const answerSchema = z.object({
  
  description: z.string().min(10,{message:"Description must be atleast 10 characters long"}).trim()
})