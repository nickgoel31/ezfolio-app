import UserButton from '@/components/user-btn'
import React from 'react'

const MobileNavbar = ({username}:{username:string}) => {
  return (
    <div className='flex items-center gap-3'>
        <UserButton username={username} />
    </div>
  )
}

export default MobileNavbar