"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Edit } from 'lucide-react'
import React, { useContext } from 'react'
import NameComponent from './acc-info/name'
import { UserContext } from '../../layout'
import UsernameComponent from './acc-info/username'
import EmailComponent from './acc-info/email'
import { InfinitySpin } from 'react-loader-spinner'

const AccountInformation = () => {

    const user = useContext(UserContext)
    if(!user) return (
        <InfinitySpin />
    )

  return (
    <div className='space-y-3 pl-3'>
        <div className=''>
            <h3 className='text-lg font-bold'>Account Information</h3>
            <p className='text-sm font-medium text-muted-foreground'>Update your account information and email address.</p>
        </div>

        <div className='space-y-4 pl-6'>
            <NameComponent name={user.username}/>
            <UsernameComponent username={user.username}/>
            <EmailComponent email={user.email} />
        </div>
    </div>
  )
}

export default AccountInformation