import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'

const UserButton = ({username}:{username:string}) => {
  return (
    <div className='w-full rounded p-1 hover:bg-foreground/10 transition flex items-center'>
        <Popover>
            <PopoverTrigger>
                <div className='flex items-center text-sm font-medium w-full'>
                    <Avatar className='h-full'>
                        <AvatarFallback className='uppercase w-8 h-8'>
                            {username.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <p>{username}</p>
                </div>
            </PopoverTrigger>

            <PopoverContent>
                Hello
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default UserButton