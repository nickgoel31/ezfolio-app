"use client"

import UserButton from '@/components/user-btn'
import { AlignRight, Eye, Shapes } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MobileBottomBar = ({userId,username}:{userId:string,username:string}) => {
  return (
    <div className='flex items-center w-full h-full'>
        <div className='w-full h-full grid grid-cols-3 gap-2 items-center justify-center px-3'>
            <Link href={`/d/${userId}`} className='flex flex-col space-y-1 items-center justify-center hover:bg-foreground/10 w-full h-full font-medium text-xs p-1'>
                <AlignRight size={17} />
                <p>Info</p>
            </Link>
            <Link href={`/d/${userId}/appearance`} target='_blank' className='flex flex-col space-y-1 items-center justify-center hover:bg-foreground/10 w-full h-full font-medium text-xs p-1'>
                <Shapes size={17} />
                <p>Appearance</p>
            </Link>
            <Link href={`/${username}`} className='flex flex-col space-y-1 items-center justify-center hover:bg-foreground/10 w-full h-full font-medium text-xs p-1'>
                <Eye size={17} />
                <p>Preview</p>
            </Link>
        </div>
        
    </div>
  )
}

export default MobileBottomBar