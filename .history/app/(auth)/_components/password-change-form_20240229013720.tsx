"use client"

import { redirect, useSearchParams } from 'next/navigation'
import React from 'react'

const PasswordChangeForm = () => {
    const searchParams = useSearchParams()
    const resetPasswordToken = searchParams.get("reset_token")

    if(!resetPasswordToken) redirect("/login")
  return (
    <div>PasswordChangeForm</div>
  )
}

export default PasswordChangeForm