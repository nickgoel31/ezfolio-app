import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='relative h-full w-full bg-background overflow-hidden px-6'>
        {/* <div className='absolute h-96 w-96 rounded-full bg-violet-500/20 blur-3xl -top-20 -right-20' />
        <div className='absolute h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl -bottom-20 -left-20' /> */}
      <div className="absolute bottom-0 z-[-10] left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="hidden dark:block absolute top-0 z-[-2] h-screen w-screen rotate-180 transform  bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,#7C3AED15_100%)]"></div>

      <div className="block dark:hidden absolute top-0 z-[-2] h-screen w-screen rotate-180 transform  bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,#7C3AED30_100%)]"></div>

        {children}
    </body>
  )
}

export default AuthLayout