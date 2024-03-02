import React from 'react'
import Link from 'next/link';
import OnBoardingForm from '../_components/on-boarding-form';
import { getCurrentUser } from '@/helpers/get-user';
import { getUserpageByUserId } from '@/actions/userpage/get-userpage';
import { redirect } from 'next/navigation';

const CreateUserPage = async () => {
    const appName = process.env.APP_NAME || "gumshuda";
    const user = await getCurrentUser()
    if(!user) return;
    const userPage = await getUserpageByUserId(user.id)
    if(userPage) redirect("/d/redirect")

  return (
    <div className='flex flex-col w-full h-full space-y-7 items-center justify-center'>
        <div className='space-y-2 text-center'>
            <h1 className='font-bold text-4xl'>Create a&nbsp;{appName}&nbsp;page</h1>
            <p className=" text-muted-foreground font-medium">Lets create your page!</p>
        </div>

        <OnBoardingForm />

        <Link href={"/login"} className='underline underline-offset-2 text-primary'>
          Already have an account?
        </Link>
    </div>
  )
}

export default CreateUserPage