import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Settings2 } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { FormDescription } from '../ui/form'
import { Button } from '../ui/button'

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
                <DialogDescription>
                    Manage your account information and preferences
                </DialogDescription>
            </DialogHeader>

            <div className='w-full'>
                <div className='space-y-1'>
                    <Label>Username</Label>
                    <Input value={username} disabled/>
                    <p className='text-muted-foreground font-medium text-xs'>usernames can&apos;t be changed, once created!</p>
                </div>
            </div>

            <div className='w-full items-center flex justify-end'>
                <DialogClose>
                    <Button>Save</Button>
                </DialogClose>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default AccountSettings