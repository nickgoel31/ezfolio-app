import { getUserByUsername } from '@/helpers/get-user'
import { redirect } from 'next/navigation'
import React from 'react'

const AdminPage = async ({params}:{params:{username:string}}) => {
    const user = await getUserByUsername(params.username)
    if(!user) redirect("/s")
    if(!user.isAdmin) redirect("/d")
  return (
    <div>Hi</div>
  )
}

export default AdminPage