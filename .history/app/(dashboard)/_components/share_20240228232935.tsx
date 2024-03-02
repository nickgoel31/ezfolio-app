"use client"

import { Copy, CopyCheck, ShareIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Share = ({username}:{username:string}) => {
    const [isOpen,setIsOpen] = useState(false)
    const [isCopied, setIsCopied] = useState(false)
    const appUrl = process.env.APP_URL || "http://localhost:3001"

    const shareLink = `${appUrl}/${username}`

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(shareLink);
        setIsCopied(true)

        setTimeout(() => {
            setIsCopied(false)
        },4000)
    }
    
  return (
    <div className='p-3 px-4 flex flex-col gap-2'>
        <h1 className='font-semibold text-sm'>Share your page</h1>
        <div onClick={handleCopyToClipboard} className='rounded border bg-foreground/5 p-2 px-3 flex items-center justify-between gap-9 cursor-pointer w-full min-w-[25vw]'>
            <p className='text-sm font-medium'>{!isCopied ? `${shareLink}` : `Copied to clipboard`}</p>
            <div>
                {isCopied ? (
                    <CopyCheck size={16} className='text-muted-foreground'/>
                ):(
                    <Copy size={16} className='text-muted-foreground'/>
                )}
            </div>
        </div>
        <div className='grid grid-cols-2 gap-2 items-center w-full'>
            <div className='border-b cursor-pointer border-primary hover:bg-foreground/5 text-sm font-semibold items-center justify-center w-full text-center py-1'>
                Link
            </div>

            <div className='border-b border-foreground/20 cursor-pointer hover:bg-foreground/5 text-sm font-semibold items-center justify-center w-full text-center py-1'>
                Others
            </div>
        </div>
    </div>
  )
}

export default Share