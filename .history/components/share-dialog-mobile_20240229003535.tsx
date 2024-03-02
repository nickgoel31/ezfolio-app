"use client"

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Copy, CopyCheck, Mail, Share2 } from 'lucide-react'
import { Separator } from './ui/separator'
import Link from 'next/link'
import { FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { shareText } from '@/data'

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

            <Separator />

            <div className='space-y-2'>
                <h4 className='text-sm font-semibold'>Or share on these apps</h4>

                <div className='rounded  grid grid-cols-3 items-center justify-between gap-4 w-full '>

                <Link href={`whatsapp://send?text=${shareText}%20${shareLink}`} data-action="share/whatsapp/share" target='_blank' className='hover:bg-foreground/5 rounded transition p-2 flex items-center gap-2 justify-center'>
                    <FaWhatsapp size={20}/>
                    <p className='font-medium text-xs'>Whatsapp</p>
                </Link>

                <Link href={`https://twitter.com/intent/tweet?url=${shareLink}&text=${shareText}`} target='_blank' className='hover:bg-foreground/5 rounded transition p-2 flex items-center gap-2 justify-center'>
                    <FaTwitter size={20}/>
                    <p className='font-medium text-xs'>Twitter</p>
                </Link>

                {/* <Link href={`https://www.facebook.com/sharer/sharer.php?quote=${shareText}`} target='_blank'>
                    <FaFacebook size={20}/>
                </Link> */}

                <Link href={`mailto:?subject=Check out this website!&amp;body=Check out this website`} target='_blank' className='hover:bg-foreground/5 rounded transition p-2 flex items-center gap-2 justify-center'>
                    <Mail size={20}/>
                    <p className='font-medium text-xs'>Email</p>
                </Link>

                </div>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default ShareDialogMobile