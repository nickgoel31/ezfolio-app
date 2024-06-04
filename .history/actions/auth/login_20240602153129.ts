"use server"

import { loginFormSchema,} from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"
import bcryptjs from "bcryptjs"
import { getUserByEmail } from "@/helpers/get-user"
import { set2FACookieInHeader, setCookieInHeader } from "./set-cookie"
import { getSessionByUserId } from "@/helpers/get-session"
import { sendEmailVerificationEmail } from "./email-verification"
import { twoFactorAuthenticationInDB } from "./2fa"
import { get2FATokenByToken } from "@/helpers/get-2fa-token"

export const login = async (values: z.infer<typeof loginFormSchema>) => {

    const validatedFields = loginFormSchema.safeParse(values)

    if(!validatedFields.success) return {error: "Something went wrong"}

    const {email,password} = validatedFields.data

    const existingUser = await getUserByEmail(email)
    if(!existingUser) return {error: "No user found! Please sign up."}

    const isCorrectPassword = await bcryptjs.compare(password, existingUser.hashedPassword)

    if(!isCorrectPassword) return {error: 'Incorrect Password'}

    const existingSession = await getSessionByUserId(existingUser.id)
    if(existingSession){
        await db.userSession.delete({
            where:{
                sessionId: existingSession.sessionId
            }
        })
    }

    await db.userSession.create({
        data:{
            userId: existingUser.id
        }
    })

    const session = await db.userSession.findFirst({
        where:{
            userId: existingUser.id
        }
    })
    if(!session) return;

    if(existingUser.emailVerified  === false) {
        await sendEmailVerificationEmail(existingUser.email)
        return {error: "Verify your email first! Email verification sent again"}
    }

    if(existingUser.twoFactorAuthentication === true) {
        const tokenId = await twoFactorAuthenticationInDB(existingUser.email)
        return {success: "Please Enter the 2FA Code sent to your email!", successCode:"SUC_2FA_SENT", tokenId2FA: tokenId}
    }

    setCookieInHeader(session.sessionId)

    

}

export const verify2FACodeAndLogin = async (pin:string , tokenId:string) => {
    const twoFaToken = await get2FATokenByToken(tokenId)
    if()
}