import { getUserpageByUserId } from '@/actions/userpage/get-userpage'
import React from 'react'

const UserPageDashboard = async ({params}:{params:{userId:string}}) => {
    await getUserpageByUserId(params.userId)
    // if(params.userId)

  return (
    <div>UserPageDashboard</div>
  )
}

export default UserPageDashboard