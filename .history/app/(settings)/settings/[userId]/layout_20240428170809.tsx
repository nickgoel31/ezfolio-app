import React from 'react'
import Link from 'next/link'

const SettingsLayout = ({params, children}:{children:React.ReactNode, params: {userId:string}}) => {
  return (
    <div className='px-4 h-screen w-full bg-background text-foreground '>
        <div className="h-full max-w-screen-lg mx-auto pb-16">
            <div className='border-b border-foreground/20 py-6 flex w-full items-center justify-between'>
              <h1 className=" text-4xl font-semibold">Settings</h1>
              <Link href={`/d/${params.userId}`} className='p-2 px-4 rounded-md bg-violet-500 text-white'>
                Back to dashboard
              </Link>
            </div>
            {children}
        </div>
    </div>
  )
}

export default SettingsLayout