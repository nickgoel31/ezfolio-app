"use client"

import { usePasswordResetToken } from '@/hooks/usePasswordResetToken'
import { redirect, useSearchParams } from 'next/navigation'
import React from 'react'

const PasswordChangeForm = () => {
    const searchParams = useSearchParams()
    const resetPasswordToken = searchParams.get("reset_token")
    if(!resetPasswordToken) return;

    const token = usePasswordResetToken(resetPasswordToken)
    if(!token) return;

    console.log(token)

    if(!resetPasswordToken) redirect("/login")
  return (
    <div>
        Hi guys
    </div>
  )
}

export default PasswordChangeForm