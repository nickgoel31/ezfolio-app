import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='relative'>
        <div className='absolute h-96 w-96 rounded-full bg-violet-500 -top-10 -right-10 overflow-hidden'>

        </div>

        {children}
    </body>
  )
}

export default AuthLayout