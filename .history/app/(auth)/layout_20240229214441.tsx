import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='relative overflow-hidden'>
        {/* <div className='absolute h-96 w-96 rounded-full bg-violet-500/20 blur-3xl -top-20 -right-20' />
        <div className='absolute h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl -bottom-20 -left-20' /> */}

        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#6D28D940_100%)]"></div>

        {children}
    </body>
  )
}

export default AuthLayout