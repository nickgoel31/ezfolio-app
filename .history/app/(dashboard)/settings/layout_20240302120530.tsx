"use client"

import React from 'react'
import SettingsNavbar from './_components/set-nav'
import { useCurrentUser } from '@/hooks/useCurrentUser';

const SettingsLayout = ({children}:{children:React.ReactNode}) => {

  const user = useCurrentUser();
  if(!user) return;


  const UserContext = React.createContext(user);
  return (
    <body className='flex justify-center bg-nuetral-50 px-6 py-10 relative h-full w-full scroll-smooth'>
      <div className='w-full max-w-screen-md'>
        <div className='sticky top-0 pt-10 pb-2 space-y-4 bg-background z-[12]'>
            <div className='space-y-1'>
                <h1 className='text-3xl font-bold'>Account Settings</h1>
                <p className='text-sm font-medium text-muted-foreground'>Manage your account information and settings.</p>
            </div>
            <SettingsNavbar />
        </div>
        <div>
            {children}
        </div>
      </div>
    </body>
  )
}

export default SettingsLayout