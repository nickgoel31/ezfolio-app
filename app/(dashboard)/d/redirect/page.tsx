import { getCookieFromHeader } from '@/actions/auth/set-cookie'
import { getCurrentUser } from '@/helpers/get-user'
import { redirect } from 'next/navigation'
import React from 'react'

const DashboardRedirectPage = async () => {

    const user = await getCurrentUser()
    if(!user) redirect("/login")

    redirect(`/d/${user.id}`)

  return (
    <div>Redirecting....</div>
  )
}

export default DashboardRedirectPage