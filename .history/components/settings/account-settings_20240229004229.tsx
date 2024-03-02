import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Settings2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { FormDescription } from '../ui/form'

const AccountSettings = ({username}:{username:string}) => {

  return (
    <Dialog>
        <DialogTrigger>
            <div className='flex items-center gap-2 text-sm font-medium w-full p-2 hover:bg-foreground/10 rounded transition cursor-pointer'>
                <Settings2 size={18}/>
                Account settings
            </div>
        </DialogTrigger>

        <DialogContent className='w-[95%] md:w-[90%] lg:[80vw]'>
            <DialogHeader>
                <DialogTitle>
                    User Settings
                </DialogTitle>
                <p></p>
            </DialogHeader>

            <div className='w-full'>
                <div className='space-y-1'>
                    <Label>Username</Label>
                    <Input value={username}/>
                    <FormDescription>h</FormDescription>
                </div>

            </div>
        </DialogContent>
    </Dialog>
  )
}

export default AccountSettings