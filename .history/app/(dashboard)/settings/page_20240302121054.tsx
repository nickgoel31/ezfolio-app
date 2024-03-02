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
    const user = useContext(UserContext)

  return (
    <div className='h-full py-6'>
      {user?.username}
      <GeneralSettings />
    </div>
  )
}

export default SettingsPage