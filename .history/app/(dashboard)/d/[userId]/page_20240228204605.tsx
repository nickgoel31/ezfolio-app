import { getUserpageByUserId } from '@/actions/userpage/get-userpage'
import { getProjectByUserPageId } from '@/helpers/get-project'
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

    const projects = await getProjectByUserPageId(userpage.id)

  return (
    <div>

    </div>
  )
}

export default UserPageDashboard