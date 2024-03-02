"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Copy, CopyCheck, Share2 } from 'lucide-react'
import { Separator } from './ui/separator'

const ShareDialogMobile = ({username}:{username:string}) => {

    const [isOpen,setIsOpen] = useState(false)
    const [isCopied, setIsCopied] = useState(false)

    const [isLinkTab, setIsLinkTab] = useState(true)
    const [isOthersTab, setIsOthersTab] = useState(false)

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
    <Dialog>
        <DialogTrigger className='block lg:hidden'>
            <div className='flex items-center gap-2 text-sm font-medium w-full p-2 hover:bg-foreground/10 rounded transition cursor-pointer lg:hidden'>
                <Share2 size={18} />
                Share your page
            </div>
        </DialogTrigger>

        <DialogContent className='block lg:hidden space-y-3'>
            <DialogHeader>
                <DialogTitle>
                    Share your page
                </DialogTitle>
                <DialogDescription>
                    Copy the link below and share it with others.
                </DialogDescription>
            </DialogHeader>

            <div onClick={handleCopyToClipboard} className='rounded border bg-foreground/5 p-2 px-3 flex items-center justify-between gap-9 cursor-pointer w-full '>
                <p className='text-sm font-medium'>{!isCopied ? `${shareLink}` : `Copied to clipboard`}</p>
                <div>
                    {isCopied ? (
                        <CopyCheck size={16} className='text-muted-foreground'/>
                    ):(
                        <Copy size={16} className='text-muted-foreground'/>
                    )}
                </div>
            </div>

            <Separator>Or</Separator>
        </DialogContent>
    </Dialog>
  )
}

export default ShareDialogMobile