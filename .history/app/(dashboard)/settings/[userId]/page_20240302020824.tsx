import { getUserpageByUserId } from '@/actions/userpage/get-userpage'
import { getUserById } from '@/helpers/get-user'
import { redirect } from 'next/navigation'
import React from 'react'

const SettingsPage = async ({params}:{params:{userId:string}}) => {
    const user = await getUserById(params.userId)
    if(!user) redirect("/login")

    const userPage = await getUserpageByUserId(user.username)

  return (
    <div>SettingsPage</div>
  )
}

export default SettingsPage