"use client"

import Logo from '@/components/logo'
import UserButton from '@/components/user-btn'
import { navigationItems } from '@/data'
import { AlignLeft, ExternalLink, Eye, Shapes } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { NavItem, UpdatedNavItems } from './nav-item'
import { cn } from '@/lib/utils'

import {motion} from "framer-motion"

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
    const [animation,setAnimation] = useState(false)

    useEffect(() => {
        if (sidebarOpen) {
            // Disable scrolling when sidebar is open
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scrolling when sidebar is closed
            document.body.style.overflow = 'auto';
        }
    }, [sidebarOpen]);

    function handleToggleSidebar (){
        setSidebarOpen(!sidebarOpen)
        setAnimation(!animation)
    }

    return (
        <div className='hidden lg:block  w-full'>
            {sidebarOpen && <div onClick={handleToggleSidebar}  
            className={cn('fixed w-full h-full bg-violet-950/10 backdrop-blur-lg z-[99] transition opacity-0', animation ? "opacity-100 animate-fade-in repeat-1" : "animate-fade-out repeat-1 opacity-0")}></div>}

            {sidebarOpen && (
                <div className={cn('z-[101] fixed right-12 top-10 cursor-pointer rounded-xl bg-gradient-to-t from-background dark:from-violet-950/10 to-background border p-2 px-4 transition opacity-0', animation ? "opacity-100 animate-fade-in repeat-1" : "animate-fade-out repeat-1 opacity-0")}>
                    <UserButton username={username}/>
                </div>
            )}

            
            <motion.div  onClick={handleToggleSidebar} 
            className={cn('updated-sidebar cursor-pointer rounded-xl bg-gradient-to-t from-background dark:from-violet-950/10 to-background border p-5 font-semibold text-lg z-[101] fixed top-8 left-12 transition h-[80px] flex flex-col items-center justify-start ', sidebarOpen && 'h-80')}>
                <span className='absolute bottom-3 w-2 h-2 bg-foreground rounded-full left-1/2 -translate-x-1/2'/>
                <div className=' h-full flex flex-col justify-between overflow-hidden'>
                    <div className='space-y-4 '>
                        <Logo /> 

                        {(
                            <div className={cn('space-y-1 transition-opacity overflow-hidden', animation ? "opacity-100 animate-fade-in delay-200 repeat-1 overflow-hidden" : "animate-fade-out repeat-1 opacity-0 overflow-hidden")}>
                                {navigationItems.map((nav,index) => (
                                <div className='w-full group'>
                                    <UpdatedNavItems key={index} nav={nav} userId={userId} username={username}/>
                                    <p className='hidden group-hover:block absolute text-sm font-medium bottom-9 left-1/2 -translate-x-1/2'>{nav.label}</p>
                                </div>
                                ))}
                            </div>
                        )}
                    </div>

                    
                </div>
            </motion.div>
        </div>
    )
}