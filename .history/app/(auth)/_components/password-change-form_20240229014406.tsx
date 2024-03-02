"use client"

import { usePasswordResetToken } from '@/hooks/usePasswordResetToken'
import { redirect, useSearchParams } from 'next/navigation'
import React from 'react'

const PasswordChangeForm = () => {
    const searchParams = useSearchParams()
    const resetPasswordToken = searchParams.get("reset_token")
    if(!resetPasswordToken) return;

    const token = usePasswordResetToken(resetPasswordToken)

    if(!resetPasswordToken) redirect("/login")
  return (
    <div>

    </div>
  )
}

export default PasswordChangeForm