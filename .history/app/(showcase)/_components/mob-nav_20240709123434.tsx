"use client"

import Logo2 from '@/components/logo2'
import { BookHeart, HandIcon, Menu } from 'lucide-react'
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

  import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { navItems } from '@/data'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  

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
                    <SheetTrigger>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent className='py-14'>
                        <SheetHeader>
                            <SheetTitle>Navigation Menu</SheetTitle>
                        </SheetHeader>
                        <div className='flex flex-col gap-6 py-10 w-full'>
                    <div className='flex flex-col gap-6 w-full'>
                        {navItems.map((nav,index) => (
                            <Link key={index} href={nav.href} className='text-sm font-medium hover:text-primary/60 transition-all'>
                                {nav.label}
                            </Link>
                        ))}
                    </div>

                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1" className='!p- w-full'>
                            <AccordionTrigger className='text-sm font-medium hover:text-primary/60 transition-all !p-0'>Services</AccordionTrigger>
                            <AccordionContent className='pt-3 w-full'>
                                <Link href="/ezbuddy" title="ezbuddy" className='relative transition-ez p-2 flex items-center justify-between rounded-md font-medium w-full'>
                                    <span>
                                        Ez<span className='bg-gradient-to-tr from-teal-200 via-indigo-200 to-rose-200 bg-clip-text text-transparent font-bold'>Buddy</span>
                                    </span>
                        
                                    <p className='rounded-md bg-violet-300 text-xs text-violet-800 p-0.5 px-2'>New</p>
                                </Link>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>


                
                </div>
                    </SheetContent>
                </Sheet>

            </div>
        </div>
    </div>
  )
}

export default MobileNavbar