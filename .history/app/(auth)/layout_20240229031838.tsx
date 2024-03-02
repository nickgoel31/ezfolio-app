import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='relative overflow-hidden'>
        <div className='absolute h-96 w-96 rounded-full bg-violet-500/20 blur-2xl -top-20 -right-20' />
        <div className='absolute h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl -bottom-20 -left-20' />

        {children}
    </body>
  )
}

export default AuthLayout