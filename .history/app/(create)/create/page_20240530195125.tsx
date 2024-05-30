import React from 'react'
import Link from 'next/link';
import OnBoardingForm from '../_components/on-boarding-form';
import { getCurrentUser } from '@/helpers/get-user';
import { getUserpageByUserId } from '@/actions/userpage/get-userpage';
import { redirect } from 'next/navigation';
import OnBoardingAI from '../_components/on-board-ai';
import { getAllColorSchemes } from '@/actions/colorscheme/get-colorscheme';
import { getAllFonts } from '@/actions/font/get-font';
import { getAllLayouts } from '@/actions/pagelayout/get-layout';

const CreateUserPage = async () => {
    const appName = process.env.APP_NAME || "Ezfolio";
    const user = await getCurrentUser()
    if(!user) {
      return redirect("/register")
    }

    const schemes = await getAllColorSchemes()
    const fonts = await getAllFonts()
    const layouts = await getAllLayouts()
    const userPage = await getUserpageByUserId(user.username)
    if(userPage) redirect("/d/redirect")

  return (
    <div className='flex flex-col w-full h-full space-y-7 items-center justify-center'>
        {/* <div className='space-y-2 text-center'>
            <h1 className='font-bold text-4xl'>Create your&nbsp;{appName}&nbsp;page</h1>
            <p className=" text-muted-foreground font-medium">Lets create your profile page!</p>
        </div> */}

        {/* <OnBoardingForm username={user.username}/> */}
        <OnBoardingAI schemes={schemes} layouts={layouts} fonts={fonts} username={user.username}/>
    </div>
  )
}

export default CreateUserPage