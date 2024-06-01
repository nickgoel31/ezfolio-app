"use client"

import React from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { BugIcon, CoffeeIcon, LogOut, MoreVertical, Settings2, Share2, Users, Wrench } from 'lucide-react'
import { logout } from '@/actions/auth/logout'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import ShareDialogMobile from '@/components/share-dialog-mobile'
import AccountSettings from '@/components/settings/account-settings'

const UserButtonShort = ({username,isAdmin}:{username:string,isAdmin?:boolean}) => {
    const handleSignout = () => {
        logout()
        redirect("/showcase")
    }
  return (
    <div className='w-full rounded p-1 lg:hover:bg-foreground/10 transition flex items-center justify-center '>
        <Popover>
            
                <div className='flex items-center text-xs bg-blue-500 lg:text-sm font-medium w-full'>
                    <Avatar className='h-full'>
                        <PopoverTrigger className='bg-red-500 flex items-center justify-center cursor-pointer'>
                            <AvatarFallback className='uppercase w-8 h-8'>
                                {username.charAt(0)}
                            </AvatarFallback>
                        </PopoverTrigger>
                    </Avatar>
                </div>
            

            <PopoverContent className='z-[120]'>
                <div className='flex flex-col w-full space-y-1'>
                    <ShareDialogMobile username={username} />

                        <Link href={`/connect`} className='flex items-center gap-3 w-full text-sm font-medium rounded hover:bg-foreground/5 p-2'>
                            <Users size={18}/>
                            <p>EzConnect</p>
                        </Link>
                    
                    <div onClick={handleSignout} className='flex items-center gap-2 text-sm font-medium w-full p-2 hover:bg-foreground/10 rounded transition cursor-pointer text-red-500'>
                        <LogOut size={18}/>
                        Logout
                    </div>

                    {isAdmin === true && (
                        <Link href={"/admin/redirect"} className='flex items-center gap-2 w-full text-sm font-medium rounded hover:bg-foreground/5 p-2'>
                            <Wrench size={17}/>
                            <p>Admin Tools</p>
                        </Link>
                    )}
                </div>
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default UserButtonShort