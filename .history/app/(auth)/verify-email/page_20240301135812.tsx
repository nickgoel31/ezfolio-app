"use client"

import { updateEmailVerified } from "@/actions/user/update-user-password"
import { checkEmailVerificationToken } from "@/helpers/check"
import { getEmailVerificationTokenByEmail, getEmailVerificationTokenByToken } from "@/helpers/get-email-verification"
import { useEmailVerificationToken } from "@/hooks/useEmailVerificationToken"
import { redirect, useSearchParams } from "next/navigation"
import { useState } from "react"
import { DNA, InfinitySpin, ThreeDots } from "react-loader-spinner"

const VerifyEmailPage = () => {

    const [success, setSuccess] = useState<string | undefined>()
    const [error,setError] = useState<string | undefined>()

    const searchParams = useSearchParams()
    const verificationToken = searchParams.get("email_verify_token")
    if(!verificationToken) redirect("/login")

    const emailVerificationTokenFromDB = useEmailVerificationToken(verificationToken)
    if(!emailVerificationTokenFromDB) {
        return (
            <div className='flex w-full h-full items-center justify-center'>
                    <div className='hidden dark:block'>
                        <InfinitySpin
                        
                        width="200"
                        color="#ffffff"
                    
                        />
                    </div>
                    <div className='block dark:hidden'>
                        <InfinitySpin
                        
                        width="200"
                        color="#000000"
                    
                        />
                    </div>
            </div>
        )
    } 

    updateEmailVerified(emailVerificationTokenFromDB.userEmail,emailVerificationTokenFromDB.token).then(d=> setSuccess(d?.success))

    // if(checkEmailVerificationToken(emailVerificationTokenFromDB) === true){
    //     
    // }
    // else{
    //     setError("Token expired, Please request a new one")
    // }

        return (
                <div className='w-full h-full flex flex-col items-center justify-center space-y-5'>
                    <div className='space-y-2 text-center pb-2'>
                        <h1 className='font-bold text-3xl'>Verifying email</h1>
                        <p className='text-muted-foreground text-sm font-medium'>
                            Please wait while we verify your email address.
                        </p>
                    </div>
            
                    
                    {!success ? (
                        <>
                        <div className="block dark:hidden">
                            <ThreeDots
                            visible={true}
                            height="80"
                            width="80"
                            color="#000000"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            />
                        </div>
            
                        <div className="dark:block hidden">
                            <ThreeDots
                            visible={true}
                            height="80"
                            width="80"
                            color="#ffffff"
                            radius="9"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            />
                        </div>
                        </>
                    ):(
                        <div className="bg-emerald-500/10 border rounded border-emerald-500 p-4 text-sm font-medium text-emerald-500">
                            {success}
                        </div>
                    )}
            
                    {error && (
                        <div className="bg-red-500/10 border rounded border-red-500 p-4 text-sm font-medium text-red-500">
                            {error}
                        </div>
                    )}
                </div>
            )
    }

export default VerifyEmailPage