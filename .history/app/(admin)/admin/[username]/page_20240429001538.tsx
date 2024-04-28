import { getUserByUsername } from '@/helpers/get-user'
import React from 'react'

const AdminPage = async ({params}:{params:{username:string}}) => {
    const user = await getUserByUsername()
  return (
    <div>AdminPage</div>
  )
}

export default AdminPage