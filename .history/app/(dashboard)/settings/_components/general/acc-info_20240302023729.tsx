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
                    <p className='text-sm font-medium text-muted-foreground'>Your username is unique and cannot be changed.</p>
                </div>
                <p className='text-sm font-medium text-muted-foreground'>@username</p>
            </div>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-base font-bold'>Email Address</h4>
                    <p className='text-sm font-medium text-muted-foreground'>Your email address is used for account recovery and notifications.</p>
                </div>
                <p className='text-sm font-medium text-muted-foreground'>
    </div>
  )
}

export default AccountInformation