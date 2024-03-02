import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='relative overflow-x-hidden'>
        <div className='absolute h-96 w-96 rounded-full bg-violet-500/20 blur-2xl -top-20 -right-20'>

        </div>

        {children}
    </body>
  )
}

export default AuthLayout