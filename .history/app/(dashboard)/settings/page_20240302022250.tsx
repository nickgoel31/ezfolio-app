import { getUserpageByUserId } from '@/actions/userpage/get-userpage';
import { getCurrentUser } from '@/helpers/get-user'
import { redirect } from 'next/navigation';
import React from 'react'

const SettingsPage = async () => {
    const user = await getCurrentUser();
    if(!user) redirect("/login")

    const userPage = await getUserpageByUserId(user.username)
    if(!userPage) redirect("/create")

  return (
    <div className='h-full'>

    </div>
  )
}

export default SettingsPage