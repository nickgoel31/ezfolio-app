import { getCurrentUser } from '@/helpers/get-user'
import { redirect } from 'next/navigation';
import React from 'react'

const SettingsRedirectPage = async () => {
    const user = await getCurrentUser();
    if(!user) redirect("/login")

  return (
    <div>Redirecting...</div>
  )
}

export default SettingsRedirectPage