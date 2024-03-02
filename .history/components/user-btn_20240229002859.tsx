"use client"

import React from 'react'
import { Avatar, AvatarFallback } from './ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { BugIcon, CoffeeIcon, LogOut, MoreVertical, Settings2, Share2 } from 'lucide-react'
import { logout } from '@/actions/auth/logout'
import { redirect } from 'next/navigation'
import Link from 'next/link'

const UserButton = ({username}:{username:string}) => {
    const handleSignout = () => {
        logout()
        redirect("/showcase")
    }

  return (
    <div className='w-full rounded p-1 lg:hover:bg-foreground/10 transition flex items-center'>
        <Popover>
            <PopoverTrigger className='w-full h-full'>
                <div className='flex items-center text-xs lg:text-sm font-medium w-full'>
                    <Avatar className='h-full'>
                        <AvatarFallback className='uppercase w-8 h-8'>
                            {username.charAt(0)}
                        </AvatarFallback>
                    </Avatar>
                    <p className=''>{username}</p>
                    <MoreVertical className='block lg:hidden ml-2' size={16}/>
                </div>
            </PopoverTrigger>

            <PopoverContent>
                <div className='flex flex-col w-full space-y-1'>
                    <div className='flex items-center gap-2 text-sm font-medium w-full p-2 hover:bg-foreground/10 rounded transition cursor-pointer lg:hidden'>
                        <Share2 size={18} />
                        Share your page
                    </div>

                    <Link href={"mailto:harshgoel2004@gmail.com"} className='flex items-center gap-2 w-full text-sm font-medium rounded hover:bg-foreground/5 p-2'>
                        <BugIcon size={18}/>
                        <p>Report a bug?</p>
                    </Link>

                    {/* <Link href={"mailto:harshgoel2004@gmail.com"} className='flex items-center gap-2 w-full text-sm font-medium rounded hover:bg-foreground/5 p-2'>
                        <CoffeeIcon size={17}/>
                        <p>Buy me a coffee</p>
                    </Link> */}
                    <div className='flex items-center gap-2 text-sm font-medium w-full p-2 hover:bg-foreground/10 rounded transition cursor-pointer'>
                        <Settings2 size={18}/>
                        Account settings
                    </div>
                    <div onClick={handleSignout} className='flex items-center gap-2 text-sm font-medium w-full p-2 hover:bg-foreground/10 rounded transition cursor-pointer text-red-500'>
                        <LogOut size={18}/>
                        Logout
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default UserButton