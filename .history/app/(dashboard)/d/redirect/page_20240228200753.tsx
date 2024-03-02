import { getCookieFromHeader } from '@/actions/auth/set-cookie'
import React from 'react'

const DashboardRedirectPage = async () => {

    const sessionCookie = getCookieFromHeader()

  return (
    <div>Redirecting....</div>
  )
}

export default DashboardRedirectPage