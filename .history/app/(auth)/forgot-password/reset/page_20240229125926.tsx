"use client"
import { redirect, useSearchParams } from 'next/navigation'
import React from 'react'
import { useDeletePasswordResetToken, usePasswordResetToken } from '@/hooks/usePasswordResetToken'
import { deletePasswordResetTokenByToken } from '@/actions/auth/password-reset'
import {RotatingSquare} from 'react-loader-spinner'


import ChangePasswordForm from '../../_components/password-change-form'

const ResetPassword = () => {
    const searchParams = useSearchParams()
    const resetPasswordToken = searchParams.get("reset_token")
    if(!resetPasswordToken) return;

    const token = usePasswordResetToken(resetPasswordToken) 
    if(!token) {
        setTimeout(() => {
            return  (
                <div className='flex w-full h-full items-center justify-center'>
                    <RotatingSquare
                    visible={true}
                    height="100"
                    width="100"
                    color="#4fa94d"
                    ariaLabel="rotating-square-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    />
                </div>
            )
        },4000)

        return (
            <div>Invalid token</div>
        )
    }

    if(new Date().getTime() - token.createdAt.getTime() > 150 * 1000 * 60) {
        useDeletePasswordResetToken(token.token)
        return (
            <div>TOKEN EXPIRED, CREATE A NEW ONE</div>
        )
        
    }

    if(!resetPasswordToken) redirect("/login")

    


    

  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-3 '>
        <div className='space-y-2 text-center pb-2'>
            <h1 className='font-bold text-3xl'>Change your password</h1>
            <p className='text-muted-foreground text-sm font-medium'>
                Fill out the form below and click reset!
            </p>
        </div>

        <ChangePasswordForm email={token.userEmail} token={token.token}/>

    </div>
  )
}

export default ResetPassword