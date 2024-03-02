import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='relative'>
        <div className='absolute h-96 w-96 rounded-full bg-violet-500'>

        </div>

        {children}
    </body>
  )
}

export default AuthLayout