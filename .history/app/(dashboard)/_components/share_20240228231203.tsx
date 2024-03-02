"use client"

import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Share = ({username}:{username:string}) => {
    const [isOpen,setIsOpen] = useState(false)
    const appUrl = process.env.APP_URL || "http://localhost:3000"
    
  return (
    <div className='p-3 px-5 flex flex-col items-center'>
        <h1 className='font-semibold text-sm'>Share your page</h1>
        <div className='rounded w-full border bg-foreground/5 p-1 flex items-center gap-6'>
            <p>{`${appUrl}/${username}`}</p>
        </div>
    </div>
  )
}

export default Share