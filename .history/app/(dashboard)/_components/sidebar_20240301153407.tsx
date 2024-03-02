"use client"

import Logo from '@/components/logo'
import UserButton from '@/components/user-btn'
import { navigationItems } from '@/data'
import { AlignLeft, ExternalLink, Eye, Shapes } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { NavItem, UpdatedNavItems } from './nav-item'
import { cn } from '@/lib/utils'

export const Sidebar = ({userId,username}:{userId:string,username:string}) => {
  return (
    <div className='w-full h-full px-6  py-10 flex flex-col items-center justify-between'>
        
        <div className='flex flex-col items-center space-y-6 w-full'>
            <Logo />

            <div className='w-full space-y-1'>
                {navigationItems.map((nav,index) => (
                    <NavItem key={index} nav={nav} userId={userId} username={username}/>
                ))}
                {/* <Link href={`/d/${userId}`} className='rounded p-2 hover:bg-foreground/10 transition flex gap-2 items-center w-full'>
                    <AlignLeft size={18}/>
                    <p className='font-medium'>Info</p>
                </Link>

                <Link href={`/d/${userId}/appearance`} className='rounded p-2 hover:bg-foreground/10 transition flex gap-2 items-center '>
                    <Shapes size={18}/>
                    <p className='font-medium'>Appearance</p>
                </Link>

                <Link href={`/${username}`} target='_blank' className='rounded p-2 hover:bg-foreground/10 transition flex gap-2 items-center '>
                    <Eye size={18}/>
                    <p className='font-medium'>Preview</p>
                    <ExternalLink size={17}/>
                </Link> */}
            </div>
        </div>

        <div className='user-button w-full'>
            <UserButton username={username}/>
        </div>
    </div>
  )
}


export const UpdatedSidebar = ({userId,username}:{userId:string,username:string}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div className=''>
            <div className='absolute w-full h-full bg-red-500 z-[99]'>

            </div>
            <div onClick={() => setSidebarOpen(!sidebarOpen)} 
            className={cn('cursor-pointer rounded-xl bg-background border p-5 font-semibold text-lg z-[10] fixed top-8 left-12 transition', sidebarOpen && '')}>
                <div className='space-y-4'>
                    <Logo /> 

                    {sidebarOpen && (
                        <div className='space-y-1'>
                            {navigationItems.map((nav,index) => (
                            <UpdatedNavItems key={index} nav={nav} userId={userId} username={username}/>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}