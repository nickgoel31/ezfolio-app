import { getUserpageByUserId } from '@/actions/userpage/get-userpage'
import { getUserById } from '@/helpers/get-user'
import { redirect } from 'next/navigation'
import React from 'react'

const UserPageDashboard = async ({params}:{params:{userId:string}}) => {
    const user = await getUserById(params.userId)
    if(!user) return;
    const userpage = await getUserpageByUserId(user.username)
    if(!userpage) {
        redirect("/create")
    }

  return (
    <div>UserPageDashboard</div>
  )
}

export default UserPageDashboard