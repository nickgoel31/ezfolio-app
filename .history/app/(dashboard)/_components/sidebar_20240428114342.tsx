"use client"

import Logo from '@/components/logo'
import UserButton from '@/components/user-btn'
import { navigationItems } from '@/data'
import { AlignLeft, BugIcon, ExternalLink, Eye, Settings2, Shapes } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { NavItem, UpdatedNavItems } from './nav-item'
import { cn } from '@/lib/utils'

import {motion} from "framer-motion"
import { usePathname } from 'next/navigation'

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
                                <div key={index} className='w-full group'>
                                    <UpdatedNavItems  nav={nav} userId={userId} username={username}/>
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


export const NewSidebar = ({userId,username}:{userId:string,username:string}) => {
    return(
        <div className='hidden lg:block fixed px-4 w-[15vw] z-[10] border-r h-full bg-background/30 backdrop-blur-md py-10 overflow-hidden'>
            <div className="dark:block fixed left-0 top-0 z-[1] bg-violet-600/50 rounded-full w-28 h-28 blur-3xl"></div>
            <div className="dark:block fixed right-0 bottom-0 z-[1] bg-blue-600/50 rounded-full w-28 h-28 blur-3xl"></div>
            <div className='w-full h-full flex flex-col justify-between'>
                <div>
                    <div className='logo text-2xl w-full px-4 text-center mb-12'>
                        <span className='font-bold'>Ez</span>folio
                    </div>

                    <div className='navlinks flex flex-col gap-2 mb-6'>
                        {navigationItems.map((nav,index) => (
                            <div key={index} className={cn('w-full group', `/${endPathname}` === nav.href && 'bg-foreground/5')}>
                                <NavItem  nav={nav} userId={userId} username={username}/>
                            </div>
                        ))}
                    </div>

                    <div className='w-full px-2 mb-6'>
                        <hr className=''/>
                    </div>

                    <div className='space-y-2'>

                        {/* <Link href={"mailto:harshgoel2004@gmail.com"} className='flex items-center gap-2 w-full text-sm font-medium rounded hover:bg-foreground/5 p-2'>
                            <CoffeeIcon size={17}/>
                            <p>Buy me a coffee</p>
                        </Link> */}
                        <Link href={"/settings"} className='flex items-center gap-3 w-full text-sm font-medium rounded hover:bg-foreground/5 p-2'>
                            <Settings2 size={18}/>
                            <p>Settings</p>
                        </Link>

                        <Link href={"mailto:harshgoel2004@gmail.com"} className='flex items-center gap-3 w-full text-sm font-medium rounded hover:bg-foreground/5 p-2'>
                            <BugIcon size={18}/>
                            <p>Report a bug?</p>
                        </Link>
                    </div>
                </div>

                <div>
                    <UserButton username={username}/>
                </div>
            </div>
        </div>
    )
}