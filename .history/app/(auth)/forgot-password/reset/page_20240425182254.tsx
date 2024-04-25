"use client"
import { redirect, useSearchParams } from 'next/navigation'
import React, { Suspense, useState } from 'react'
import { useDeletePasswordResetToken, usePasswordResetToken } from '@/hooks/usePasswordResetToken'
import { deletePasswordResetTokenByToken } from '@/actions/auth/password-reset'
import {InfinitySpin, RotatingSquare} from 'react-loader-spinner'


import ChangePasswordForm from '../../_components/password-change-form'

const ResetPassword = () => {
    const [error, seterror] = useState<string>()
    const searchParams = useSearchParams()
    const resetPasswordToken = searchParams.get("reset_token")
    if(!resetPasswordToken) redirect("/login");

    const token = usePasswordResetToken(resetPasswordToken) 
    if(!token) {
        return (
            <div className='flex w-full h-full items-center justify-center'>
                <Suspense>
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
                    </Suspense>
            </div>
        )
    }
    

  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-3 '>
        <div className='space-y-2 text-center pb-2'>
            <h1 className='font-bold text-3xl'>Change your password</h1>
            <p className='text-muted-foreground text-sm font-medium'>
                Fill out the form below and click reset!
            </p>
        </div>

        {error ? (
            
            <div className="bg-red-500/10 border rounded border-red-500 p-4 text-sm font-medium text-red-500">
                {error}
            </div>
           
        ):(
            <ChangePasswordForm email={token.userEmail} token={token.token}/>
        )}

    </div>
  )
}

export default ResetPassword