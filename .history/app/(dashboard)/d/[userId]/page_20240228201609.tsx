import { getUserpageByUserId } from '@/actions/userpage/get-userpage'
import { redirect } from 'next/navigation'
import React from 'react'

const UserPageDashboard = async ({params}:{params:{userId:string}}) => {
    const userpage = await getUserpageByUserId(params.userId)
    if(!userpage) {
        redirect("/create")
    }

  return (
    <div>UserPageDashboard</div>
  )
}

export default UserPageDashboard