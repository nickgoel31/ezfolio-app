"use client"

import { getUserpageByUserId } from '@/actions/userpage/get-userpage';
import { getCurrentUser } from '@/helpers/get-user'
import { redirect } from 'next/navigation';
import React, { useContext } from 'react'
import GeneralSettings from './_components/general-settings';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useUserpageByUserId } from '@/hooks/useUserpageByUserId';
import { UserContext } from './layout';
import { InfinitySpin } from 'react-loader-spinner';

const SettingsPage = () => {

  const user = useContext(UserContext)
  if(!user) return (
    <div className='flex w-full h-full items-center justify-center'>
                    <div className='hidden dark:block'>
                        <InfinitySpin
                        
                        width="200"
                        color="#ffffff"
                    
                        />
                    </div>
                    <div className='block dark:hidden'>
                        <InfinitySpin
                        
                        width="200"
                        color="#000000"
                    
                        />
                    </div>
            </div>
  )
  return (
    <div className='h-full py-6 pb-10'>
      <GeneralSettings />
    </div>
  )
}

export default SettingsPage