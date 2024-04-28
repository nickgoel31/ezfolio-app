"use client"

import UserButton from '@/components/user-btn'
import { navigationItems } from '@/data'
import { AlignRight, Eye, Shapes } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {NavItem} from './nav-item'

const MobileBottomBar = ({userId,username}:{userId:string,username:string}) => {
  return (
    <div className='flex items-center w-full h-full'>
        <div className='w-full h-full grid grid-cols-4 gap-2 items-center justify-center px-3'>
            {navigationItems.map((nav,index) => (
                <MobileNavItem key={index} nav={nav} userId={userId} username={username}/>
            ))}
            {/* <Link href={`/d/${userId}`} className='flex flex-col space-y-1 items-center justify-center hover:bg-foreground/10 w-full h-full font-medium text-xs p-1'>
                <AlignRight size={17} />
                <p>Info</p>
            </Link>
            <Link href={`/d/${userId}/appearance`}  className='flex flex-col space-y-1 items-center justify-center hover:bg-foreground/10 w-full h-full font-medium text-xs p-1'>
                <Shapes size={17} />
                <p>Appearance</p>
            </Link>
            <Link href={`/${username}`} target='_blank' className='flex flex-col space-y-1 items-center justify-center hover:bg-foreground/10 w-full h-full font-medium text-xs p-1'>
                <Eye size={17} />
                <p>Preview</p>
            </Link> */}
        </div>
        
    </div>
  )
}

export default MobileBottomBar