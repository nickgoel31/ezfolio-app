"use client"

import { Copy, ShareIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Share = ({username}:{username:string}) => {
    const [isOpen,setIsOpen] = useState(false)
    const appUrl = process.env.APP_URL || "http://localhost:3000"

    const shareLink = `${appUrl}/${username}`

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(shareLink);
    }
    
  return (
    <div className='p-3 px-4 flex flex-col gap-2'>
        <h1 className='font-semibold text-sm'>Share your page</h1>
        <div onClick={handleCopyToClipboard} className='rounded w-full border bg-foreground/5 p-2 px-3 flex items-center gap-9 cursor-pointer'>
            <p className='text-sm font-medium'>{shareLink}</p>
            <Copy size={15} className='text-muted-foreground'/>
        </div>
    </div>
  )
}

export default Share