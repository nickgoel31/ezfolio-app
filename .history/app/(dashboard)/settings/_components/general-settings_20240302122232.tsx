import React from 'react'
import AccountInformation from './general/acc-info'
import ChangePassword from './general/change-pass'
import TwoFAuth from './general/two-f-a'

const GeneralSettings = () => {
  return (
    <div id='general' className='space-y-4 pb-10'>
        <div className=''>
            <h2 className='text-2xl font-bold'>General</h2>
            <p className='text-sm font-medium text-muted-foreground'>Manage your account information and settings.</p>
        </div>

        <div className='space-y-6'>
            
                <AccountInformation />
                <ChangePassword />
                <TwoFAuth />
        </div>
    </div>
  )
}

export default GeneralSettings