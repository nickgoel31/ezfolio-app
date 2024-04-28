import { getCurrentUser } from '@/helpers/get-user'
import { redirect } from 'next/navigation'
import React from 'react'

const AdminRedirect = async () => {

    const user = await getCurrentUser()
    if(!user) redirect("/d/")

    redirect(`/d/${user.id}`)

  return (
    <div></div>
  )
}

export default AdminRedirect