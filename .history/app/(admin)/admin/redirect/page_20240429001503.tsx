import { getCurrentUser } from '@/helpers/get-user'
import { redirect } from 'next/navigation'
import React from 'react'

const AdminRedirect = async () => {

    const user = await getCurrentUser()
    if(!user) redirect("/d")

    if(!user.isAdmin) redirect("/d")

    redirect(`/admin/${user.username}`)

  return (
    <div></div>
  )
}

export default AdminRedirect