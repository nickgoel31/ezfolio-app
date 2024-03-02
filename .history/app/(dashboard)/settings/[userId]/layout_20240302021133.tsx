import React from 'react'

const SettingsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='max-w-screen-md mx-auto px-6 py-10'>
        <div className=''>
            <h1>Account Settings</h1>
            <p className='text-sm font-medium text-muted-foreground'>Manage your account information and settings.</p>
        </div>
        <div>
            {children}
        </div>
    </body>
  )
}

export default SettingsLayout