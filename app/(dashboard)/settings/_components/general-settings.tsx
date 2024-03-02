"use client"

import React, { useContext } from 'react'
import AccountInformation from './general/acc-info'
import ChangePassword from './general/change-pass'
import TwoFAuth from './general/two-f-a'
import { UserContext } from '../layout'
import { InfinitySpin } from 'react-loader-spinner'

const GeneralSettings = () => {
  const user = useContext(UserContext)
    if(!user) return (
        <InfinitySpin />
    )
  return (
    <div id='general' className='space-y-4 '>
        <div className=''>
            <h2 className='text-2xl font-bold'>General</h2>
            <p className='text-sm font-medium text-muted-foreground'>Manage your account information and settings.</p>
        </div>

        <div className='space-y-6'>
                <AccountInformation user={user}/>
                <ChangePassword />
                <TwoFAuth />
        </div>
    </div>
  )
}

export default GeneralSettings