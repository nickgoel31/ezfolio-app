import { getUserByUsername } from '@/helpers/get-user'
import React from 'react'

const AdminPage = async ({params}:{params:{username:string}}) => {
    const user = await getUserByUsername(params.username)
    if(!user) re
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage