import React from 'react'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'
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

        <DialogContent className='w-[70%]'>

        </DialogContent>
    </Dialog>
  )
}

export default AccountSettings