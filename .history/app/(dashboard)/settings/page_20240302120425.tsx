"use client"

import { getUserpageByUserId } from '@/actions/userpage/get-userpage';
import { getCurrentUser } from '@/helpers/get-user'
import { redirect } from 'next/navigation';
import React from 'react'
import GeneralSettings from './_components/general-settings';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useUserpageByUserId } from '@/hooks/useUserpageByUserId';

const SettingsPage = () => {
    const user = useCurrentUser();
    if(!user) return;

    // const userpage = useUserpageByUserId(user.username)
    // if(!userpage) return;
    // if(error === "Userpage not found" && data === null) redirect("/create")

  return (
    <div className='h-full py-6'>
      <GeneralSettings />
    </div>
  )
}

export default SettingsPage