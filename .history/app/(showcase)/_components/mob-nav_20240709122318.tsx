"use client"

import Logo2 from '@/components/logo2'
import { BookHeart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaDiscord } from 'react-icons/fa'
import ThemeToggle from './theme-toggle'
import GetStartedBtnNavbar from '@/components/get-started-btn'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  

const MobileNavbar = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className=' p-3 w-full max-w-screen-lg flex items-center justify-between px-6'>
            <div className='logo'>
                <Logo2 />
            </div>

            <div className='flex items-center gap-6'>
                <div className='flex items-center gap-3'>    
                    <Link href={process.env.DISCORD_INVITE_LINK || ""} target='_blank'>
                        <FaDiscord className='cursor-pointer opacity-60 hover:opacity-100 transition-scroll-nav'/>
                    </Link>   

                    <Link href={"https://docs.ezfolio.social"} target='_blank'>
                        <BookHeart size={20} className='cursor-pointer opacity-60 hover:opacity-100 transition-scroll-nav'/>
                    </Link> 

                    {/* <Link href={"https://www.github.com/nickgoel31"} target='_blank'>
                        <FaGithub className='cursor-pointer opacity-60 hover:opacity-100 transition hover:-translate-y-1'/>
                    </Link> */}

                    <ThemeToggle />  

                    <GetStartedBtnNavbar />
                </div>
                <Sheet>
                    <SheetTrigger>Open</SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                        <SheetTitle>Are you absolutely sure?</SheetTitle>
                        <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                        </SheetDescription>
                        </SheetHeader>
                        </SheetContent>
                    </Sheet>

            </div>
        </div>
    </div>
  )
}

export default MobileNavbar