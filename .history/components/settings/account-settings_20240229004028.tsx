import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Settings2 } from 'lucide-react'

const AccountSettings = ({username}:{username:string}) => {
  return (
    <Dialog>
        <DialogTrigger>
            <div className='flex items-center gap-2 text-sm font-medium w-full p-2 hover:bg-foreground/10 rounded transition cursor-pointer'>
                <Settings2 size={18}/>
                Account settings
            </div>
        </DialogTrigger>

        <DialogContent className='w-[95%] md:w-[90%] lg:[80vw] space-y-5'>
            <DialogHeader>
                <DialogTitle>
                    User Settings
                </DialogTitle>
                <DialogDescription>
                    Manage your account information and preferences
                </DialogDescription>
            </DialogHeader>

            <div className='w-full'>

            </div>
        </DialogContent>
    </Dialog>
  )
}

export default AccountSettings