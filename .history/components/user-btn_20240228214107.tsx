import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Settings2 } from 'lucide-react'

const UserButton = ({username}:{username:string}) => {
  return (
    <div className='w-full rounded p-1 hover:bg-foreground/10 transition flex items-center'>
        <Popover>
            <PopoverTrigger className='w-full'>
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
                <div className='flex flex-col w-full'>
                    <div className='flex items-center gap-1 text-sm font-medium'>
                        <Settings2 />
                        Account settings
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default UserButton