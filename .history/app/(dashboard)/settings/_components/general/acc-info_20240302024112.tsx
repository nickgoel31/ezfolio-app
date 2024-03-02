import { Input } from '@/components/ui/input'
import React from 'react'

const AccountInformation = () => {
  return (
    <div className='space-y-3'>
        <div className=''>
            <h3 className='text-lg font-bold'>Account Information</h3>
            <p className='text-sm font-medium text-muted-foreground'>Update your account information and email address.</p>
        </div>

        <div className='space-y-2'>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-base font-bold'>Username</h4>
                    <p className='text-sm font-medium text-muted-foreground'>Your username is unique to you and is used to log in.</p>
                    <Input disabled value={"harshgoel2004@gmail.com"}/>
                </div>
                <button className='text-sm font-medium text-blue-600'>Change</button>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-base font-bold'>Email</h4>
                    <p className='text-sm font-medium text-muted-foreground'>Your email is used for account recovery and notifications.</p>
                </div>
                <button className='text-sm font-medium text-blue-600'>Change</button>
            </div>
        </div>
    </div>
  )
}

export default AccountInformation