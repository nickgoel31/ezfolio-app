"use client"

import { updateEmailVerified } from "@/actions/user/update-user-password"
import { useDeleteEmailVerificationToken, useEmailVerificationToken } from "@/hooks/useEmailVerificationToken"
import { redirect, useSearchParams } from "next/navigation"

const VerifyEmailPage = () => {

    const searchParams = useSearchParams()
    const verificationToken = searchParams.get("email_verify_token")
    if(!verificationToken) redirect("/login")

    const emailVerificationTokenFromDB = useEmailVerificationToken(verificationToken)
    if(!emailVerificationTokenFromDB) return <div>Loading...</div>

    // if(emailVerificationTokenFromDB.expiresAt < new Date()){
    //     useDeleteEmailVerificationToken(emailVerificationTokenFromDB.token)
    //     return (
    //         <div>TOKEN EXPIRED, CREATE A NEW ONE</div>
    //     )
    // }

    updateEmailVerified(emailVerificationTokenFromDB.userEmail,emailVerificationTokenFromDB.token)


  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-5'>
        <div className='space-y-2 text-center pb-2'>
            <h1 className='font-bold text-3xl'>Verifying email</h1>
            <p className='text-muted-foreground text-sm font-medium'>
                Please wait while we verify your email address.
            </p>
        </div>

        <p>Loading...</p>
    </div>
  )
}

export default VerifyEmailPage