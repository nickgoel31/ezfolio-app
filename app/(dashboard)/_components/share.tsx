"use client"

import { cn } from '@/lib/utils'
import { ChevronDown, Copy, CopyCheck, Mail, Share2, ShareIcon } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import {motion} from "framer-motion"
import Link from 'next/link'
import { shareText } from '@/data'


const Share = ({username}:{username:string}) => {
    const [isOpen,setIsOpen] = useState(false)
    const [isCopied, setIsCopied] = useState(false)

    const [isLinkTab, setIsLinkTab] = useState(true)
    const [isOthersTab, setIsOthersTab] = useState(false)

    const appUrl = process.env.NEXT_PUBLIC_APP_URL

    const shareLink = `${appUrl}/${username}`

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(shareLink);
        setIsCopied(true)

        setTimeout(() => {
            setIsCopied(false)
        },4000)
    }
    
  return (
    <motion.div layout className='z-[10] hidden lg:block rounded-lg fixed bottom-6 right-6  border shadow-md bg-background'>
    <div className={cn("share-div", isOpen ? "min-w-[26vw] p-3 px-4 flex flex-col gap-2" : "p-2 px-3 min-w-0 ")}>
        {isOpen && (
            <div className='flex w-full items-center justify-between'>
                <h1 className='font-semibold text-sm'>Share your page</h1>
                <ChevronDown onClick={() => setIsOpen(false)} size={17} className='cursor-pointer'/>
            </div>
        )}

        {isOpen && isLinkTab && (
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
        )}

        {isOpen && isOthersTab && (
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
        )}

        {isOpen && (
            <div className='grid grid-cols-2 gap-2 items-center w-full'>
                <div onClick={() => {
                    setIsLinkTab(true)
                    setIsOthersTab(false)
                }} className={cn('border-b cursor-pointer border-foreground/20  hover:bg-foreground/5 text-sm font-semibold items-center justify-center w-full text-center py-1', isLinkTab && "border-primary")}>
                    Link
                </div>

                <div onClick={() => {
                    setIsLinkTab(false)
                    setIsOthersTab(true)
                }} className={cn('border-b border-foreground/20 cursor-pointer hover:bg-foreground/5 text-sm font-semibold items-center justify-center w-full text-center py-1', isOthersTab && "border-primary")}>
                    Others
                </div>
            </div>
        )}

        {!isOpen && (
            <div onClick={() => setIsOpen(true)} className='w-full flex items-center gap-2 cursor-pointer'>
                <Share2 size={16}/>
                <p className='font-semibold text-sm'>Share</p>
            </div>
        )}
    </div>
    </motion.div>
  )
}

export default Share