"use client"

import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { LogOut, Settings2 } from 'lucide-react'
import { logout } from '@/actions/auth/logout'
import { redirect } from 'next/navigation'

const UserButton = ({username}:{username:string}) => {
    const handleSignout = () => {
        logout()
        redirect("/showcase")
    }

  return (
    <div className='w-full rounded p-1 lg:hover:bg-foreground/10 transition flex items-center'>
        <Popover>
            <PopoverTrigger className='w-full h-full'>
                <div className='flex items-center justify-center lg:justify-start text-xs lg:text-sm font-medium w-full'>
                    <Avatar className='h-full'>
                        <AvatarFallback className='uppercase w-8 h-8'>
                            {username.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <p className='hidden lg:block'>{username}</p>
                </div>
            </PopoverTrigger>

            <PopoverContent>
                <div className='flex flex-col w-full space-y-1'>
                    <div className='flex items-center gap-2 text-sm font-medium w-full p-2 hover:bg-foreground/10 rounded transition cursor-pointer'>
                        <Settings2 />
                        Account settings
                    </div>
                    <div onClick={handleSignout} className='flex items-center gap-2 text-sm font-medium w-full p-2 hover:bg-foreground/10 rounded transition cursor-pointer text-red-500'>
                        <LogOut />
                        Logout
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default UserButton