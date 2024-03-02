import React from 'react'
import SettingsNavbar from '../_components/set-nav'

const SettingsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='max-w-screen-md mx-auto px-6 py-10 relative h-full'>
        <div className='sticky top-10 space-y-4 bg-background border-b'>
            <div className='space-y-1'>
                <h1 className='text-3xl font-bold'>Account Settings</h1>
                <p className='text-sm font-medium text-muted-foreground'>Manage your account information and settings.</p>
            </div>
            <SettingsNavbar />
        </div>
        <div>
            {children}
        </div>
    </body>
  )
}

export default SettingsLayout