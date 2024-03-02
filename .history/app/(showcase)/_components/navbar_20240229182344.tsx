import Logo2 from '@/components/logo2'
import { navItems } from '@/data'
import Link from 'next/link'
import React from 'react'
import ThemeToggle from './theme-toggle'

const Navbar = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='rounded-full border bg-background/20 backdrop-blur-lg shadow-md p-3 w-full max-w-screen-md flex items-center justify-between px-6'>
            <div className='flex items-center gap-6'>
                <div className='logo'>
                    <Logo2 />
                </div>

                {navItems.map((nav,index) => (
                    <Link key={index} href={nav.href} className='text-sm font-medium'>
                        {nav.label}
                    </Link>
                ))}
            </div>

            <div className='flex items-center gap-6'>
                

                
                <ThemeToggle />
                
            </div>
        </div>
    </div>
  )
}

export default Navbar