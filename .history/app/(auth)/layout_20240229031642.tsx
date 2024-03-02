import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='relative'>
        <div className='absolute h-96 w-96 rounded-full bg-violet-500 top-0 right-0'>

        </div>

        {children}
    </body>
  )
}

export default AuthLayout