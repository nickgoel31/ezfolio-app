import React from 'react'
import Link from 'next/link';
import OnBoardingForm from '../_components/on-boarding-form';

const CreateUserPage = () => {
    const appName = process.env.APP_NAME || "gumshuda";

  return (
    <div className='flex flex-col w-full h-full space-y-7 items-center justify-center'>
        <div className='space-y-2 text-center'>
            <h1 className='font-bold text-4xl'>Create a&nbsp;{appName}&nbsp;page</h1>
            <p className=" text-muted-foreground font-medium">Lets create your linkIn link!</p>
        </div>

        <OnBoardingForm />

        <Link href={"/login"} className='underline underline-offset-2 text-primary'>
          Already have an account?
        </Link>
    </div>
  )
}

export default CreateUserPage