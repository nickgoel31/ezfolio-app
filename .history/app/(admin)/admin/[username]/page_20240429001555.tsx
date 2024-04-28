import { getUserByUsername } from '@/helpers/get-user'
import { redirect } from 'next/navigation'
import React from 'react'

const AdminPage = async ({params}:{params:{username:string}}) => {
    const user = await getUserByUsername(params.username)
    if(!user) redirect("/s")
    if(!user.isAdmin) redirect("/s")
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage