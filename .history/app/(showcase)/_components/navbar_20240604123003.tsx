"use client"

import Logo2 from '@/components/logo2'
import { navItems } from '@/data'
import Link from 'next/link'
import React from 'react'
import ThemeToggle from './theme-toggle'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import GetStartedBtnNavbar from '@/components/get-started-btn'

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
  import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { HandIcon } from 'lucide-react'

  

const Navbar = () => {
    const user = useCurrentUser()
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className=' p-3 w-full max-w-screen-lg flex items-center justify-between px-6'>
            <div className='flex items-center gap-9'>
                <div className='logo'>
                    <Logo2 />
                </div>

                <NavigationMenu>
                    <NavigationMenuList>
                    <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <HandIcon className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <Link href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </Link>
              <Link href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </Link>
              <Link href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </Link>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>


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
                    <FaDiscord className='cursor-pointer opacity-60 hover:opacity-100 transition-scroll-nav'/>
                </Link>   

                {/* <Link href={"https://www.github.com/nickgoel31"} target='_blank'>
                    <FaGithub className='cursor-pointer opacity-60 hover:opacity-100 transition hover:-translate-y-1'/>
                </Link> */}

                <ThemeToggle />  

                <GetStartedBtnNavbar />
            </div>
        </div>
    </div>
  )
}

export default Navbar