"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Edit } from 'lucide-react'
import React, { useContext } from 'react'
import NameComponent from './acc-info/name'
import { UserContext } from '../../layout'
import UsernameComponent from './acc-info/username'

const AccountInformation = () => {

    const user = useContext(UserContext)
    if(!user) return;

  return (
    <div className='space-y-3 pl-3'>
        <div className=''>
            <h3 className='text-lg font-bold'>Account Information</h3>
            <p className='text-sm font-medium text-muted-foreground'>Update your account information and email address.</p>
        </div>

        <div className='space-y-4 pl-6'>
            <NameComponent name={user.username}/>
            <UsernameComponent username={user.username}/>
            <div className='space-y-2'>
                <div>
                    <h4 className='text-base font-bold'>Email</h4>
                    <p className='text-sm font-medium text-muted-foreground'>Your email is used for account recovery and fetching.</p>
                </div>
                <div className='flex items-center gap-3'>
                    <Input className='w-80' value={"harshgoel2004@gmail.com"}/>
                    <Button variant={"outline"} size="icon">
                        <Edit size={15} className='text-muted-foreground'/>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountInformation