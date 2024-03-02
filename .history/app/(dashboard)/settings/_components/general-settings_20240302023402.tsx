import React from 'react'

const GeneralSettings = () => {
  return (
    <div id='general' className='space-y-3'>
        <div className=''>
            <h2 className='text-2xl font-bold'>General</h2>
            <p className='text-sm font-medium text-muted-foreground'>Manage your account information and settings.</p>
        </div>
        <div className='space-y-4'>
            <div className='flex justify-between items-center'>
            <div>
                <h3 className='text-lg font-bold'>Account Information</h3>
                <p className='text-sm font-medium text-muted-foreground'>Update your account information and email address.</p>
            </div>
            <button className='text-sm font-medium text-blue-600'>Edit</button>
            </div>
            <div className='flex justify-between items-center'>
            <div>
                <h3 className='text-lg font-bold'>Change Password</h3>
                <p className='text-sm font-medium text-muted-foreground'>Change your password.</p>
            </div>
            <button className='text-sm font-medium text-blue-600'>Change</button>
            </div>
            <div className='flex justify-between items-center'>
            <div>
                <h3 className='text-lg font-bold'>Two-Factor Authentication</h3>
                <p className='text-sm font-medium text-muted-foreground'>Enable or disable two-factor authentication.</p>
            </div>
            <button className='text-sm font-medium text-blue-600'>Enable</button>
            </div>
        </div>
    </div>
  )
}

export default GeneralSettings