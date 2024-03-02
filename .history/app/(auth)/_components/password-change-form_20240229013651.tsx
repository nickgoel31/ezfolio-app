"use client"

import React from 'react'

const PasswordChangeForm = () => {
    const searchParams = useSearchParams()
    const resetPasswordToken = searchParams.get("reset_token")
  return (
    <div>PasswordChangeForm</div>
  )
}

export default PasswordChangeForm