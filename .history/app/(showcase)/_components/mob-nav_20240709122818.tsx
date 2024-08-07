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
                        <div className='flex items-center flex-col gap-6 py-10'>
                    <div className='flex flex-col items-center gap-6'>
                        {navItems.map((nav,index) => (
                            <Link key={index} href={nav.href} className='text-sm font-medium hover:text-primary/60 transition-all'>
                                {nav.label}
                            </Link>
                        ))}
                    </div>
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger className='bg-none'>Services</NavigationMenuTrigger>
                            <NavigationMenuContent className='w-'>
                                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-violet-200 to-violet-300 dark:from-violet-600 dark:to-violet-900 p-6 no-underline outline-none focus:shadow-md"
                                        href="/login"
                                    >
                                        <HandIcon className="h-6 w-6" />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Create your own Ezfolio
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Ezfolio is a platform that helps you create a portfolio website in minutes.
                                        </p>
                                    </a>
                                    </NavigationMenuLink>
                                </li>
                                <Link href="/ezbuddy" title="ezbuddy" className='relative transition-ez p-2 bg-accent/60 rounded-md font-medium'>
                                    Ez<span className='bg-gradient-to-tr from-teal-200 via-indigo-200 to-rose-200 bg-clip-text text-transparent font-bold'>Buddy</span>
                                    <p className='pt-1 text-sm text-muted-foreground'>
                                        Get help from EzBuddy
                                    </p>
                                    <p className='absolute top-2 right-2 p-0.5 px-1.5 rounded-md bg-violet-300 text-xs text-violet-800'>New</p>
                                </Link>
                                <Link href="/connect" title="Connect" className='transition-ez p-2 hover:bg-accent/50 rounded-md font-medium'>
                                    EzConnect
                                    <p className='pt-1 text-sm text-muted-foreground'>
                                        Connect with other developers and designers.
                                    </p>
                                </Link>
                                <Link href="/resume-generator" title="Resume Generator" className=' transition-ez hover:bg-accent/50 p-2 rounded-md font-medium'>
                                    Generate a resume
                                    <p className='pt-1 text-sm text-muted-foreground'>
                                        Create a resume with ease with ezfolio
                                    </p>
                                </Link>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                </div>
                    </SheetContent>
                </Sheet>

            </div>
        </div>
    </div>
  )
}

export default MobileNavbar