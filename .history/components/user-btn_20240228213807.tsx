import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'

const UserButton = ({username}:{username:string}) => {
  return (
    <div className='w-full rounded p-1 hover:bg-foreground/10 transition flex items-center'>
        <Avatar>
            <AvatarFallback className='uppercase w-8 h-8'>
                {username.charAt(0)}
            </AvatarFallback>
        </Avatar>
    </div>
  )
}

export default UserButton