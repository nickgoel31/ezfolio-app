import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Edit } from 'lucide-react'
import React from 'react'

const EmailComponent = ({email}:{email:string}) => {
  return (
    <div className='space-y-2'>
        <div>
            <h4 className='text-base font-bold'>Email</h4>
            <p className='text-sm font-medium text-muted-foreground'>Your email is used for account recovery and fetching.</p>
        </div>
        <div className='items-center space-y-1'>
            <Input className='w-80' value={`${email}`} disabled/>
            <p className='text-muted-foreground font-medium text-xs'>Email can't be changed. Delete this account and create a new one!</p>
        </div>
    </div>
  )
}

export default EmailComponent