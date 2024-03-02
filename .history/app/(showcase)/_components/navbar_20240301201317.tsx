"use client"

import Logo2 from '@/components/logo2'
import { navItems } from '@/data'
import Link from 'next/link'
import React from 'react'
import ThemeToggle from './theme-toggle'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import { useCurrentUser } from '@/hooks/useCurrentUser'

const Navbar = () => {
    const user = useCurrentUser()
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className=' p-3 w-full max-w-screen-lg flex items-center justify-between px-6'>
            <div className='flex items-center gap-9'>
                <div className='logo'>
                    <Logo2 />
                </div>

                <div className='flex items-center gap-6'>
                    {navItems.map((nav,index) => (
                        <Link key={index} href={nav.href} className='text-sm font-medium hover:text-primary/60 transition-all'>
                            {nav.label}
                        </Link>
                    ))}
                </div>
            </div>

            <div className='flex items-center gap-3'>    
                <Link href={process.env.DISCORD_INVITE_LINK || ""} target='_blank'>
                    <FaDiscord className='cursor-pointer opacity-60 hover:opacity-100 transition hover:-translate-y-1'/>
                </Link>   

                {/* <Link href={"https://www.github.com/nickgoel31"} target='_blank'>
                    <FaGithub className='cursor-pointer opacity-60 hover:opacity-100 transition hover:-translate-y-1'/>
                </Link> */}

                <ThemeToggle />  

                {user ? (
                    <Link href={"/d/redirect"} className='p-2 px-4 rounded-full text-xs font-medium bg-gradient-to-t from-violet-300/60 dark:from-violet-950 '>
                        Dashboard
                    </Link>
                ):(
                    <Link href={"/register"} className='p-2 px-4 rounded-full text-xs font-medium bg-gradient-to-t from-violet-300/60 dark:from-violet-950 '>
                    Get started
                    </Link>
                )}
            </div>
        </div>
    </div>
  )
}

export default Navbar