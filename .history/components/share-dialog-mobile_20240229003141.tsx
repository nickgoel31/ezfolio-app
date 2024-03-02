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
        </DialogContent>
    </Dialog>
  )
}

export default ShareDialogMobile