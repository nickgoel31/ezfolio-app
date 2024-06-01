import { logout } from '@/actions/auth/logout'
import { redirect } from 'next/navigation'
import React from 'react'

const UserButtonShort = ({username,isAdmin}:{username:string,isAdmin?:boolean}) => {
    const handleSignout = () => {
        logout()
        redirect("/showcase")
    }
  return (
    <div>UserButtonShort</div>
  )
}

export default UserButtonShort