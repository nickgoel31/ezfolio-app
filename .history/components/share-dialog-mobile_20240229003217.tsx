"use client"

import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Share2 } from 'lucide-react'

const ShareDialogMobile = ({username}:{username:string}) => {
  return (
    <Dialog>
        <DialogTrigger className='block lg:hidden'>
            <div className='flex items-center gap-2 text-sm font-medium w-full p-2 hover:bg-foreground/10 rounded transition cursor-pointer lg:hidden'>
                <Share2 size={18} />
                Share your page
            </div>
        </DialogTrigger>

        <DialogContent className='block lg:hidden'>
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
        </DialogContent>
    </Dialog>
  )
}

export default ShareDialogMobile