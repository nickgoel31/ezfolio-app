"use client"

import { getUserpageByUserId } from '@/actions/userpage/get-userpage';
import { getCurrentUser } from '@/helpers/get-user'
import { redirect } from 'next/navigation';
import React, { useContext } from 'react'
import GeneralSettings from './_components/general-settings';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useUserpageByUserId } from '@/hooks/useUserpageByUserId';
import { UserContext } from './layout';

const SettingsPage = () => {
    

  return (
    <div className='h-full py-6 pb-10'>
      <GeneralSettings />
    </div>
  )
}

export default SettingsPage