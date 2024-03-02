"use client"

import { Copy, ShareIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Share = ({username}:{username:string}) => {
    const [isOpen,setIsOpen] = useState(false)
    const appUrl = process.env.APP_URL || "http://localhost:3000"
    
  return (
    <div className='p-3 px-4 flex flex-col gap-2'>
        <h1 className='font-semibold text-sm'>Share your page</h1>
        <div className='rounded w-full border bg-foreground/5 p-2 px-3 flex items-center gap-6'>
            <p className='text-sm font-medium'>{`${appUrl}/${username}`}</p>
            <Copy size={18}/>
        </div>
    </div>
  )
}

export default Share