import React from 'react'

const SettingsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='max-w-screen-md mx-auto px-6 py-10 relative'>
        <div className='sticky'>
            <div className='space-y-1'>
                <h1 className='text-3xl font-bold'>Account Settings</h1>
                <p className='text-sm font-medium text-muted-foreground'>Manage your account information and settings.</p>
            </div>
        </div>
        <div>
            {children}
        </div>
    </body>
  )
}

export default SettingsLayout