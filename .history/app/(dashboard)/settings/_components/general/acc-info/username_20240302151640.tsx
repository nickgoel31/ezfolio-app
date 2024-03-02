import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Edit } from 'lucide-react'
import React from 'react'

const UsernameComponent = ({username}:{username:string}) => {
  return (
    <div className='space-y-2'>
        <div>
            <h4 className='text-base font-bold'>Username</h4>
            <p className='text-sm font-medium text-muted-foreground'>Your username is a unique identifier</p>
        </div>
        <div className='items-center space-y-1'>
            <Input className='w-80' value={`@${username}`} disabled/>
            <p className='text-muted-foreground font-medium text-xs'>Username can&apos;t be changed.</p>
        </div>
    </div>
  )
}

export default UsernameComponent