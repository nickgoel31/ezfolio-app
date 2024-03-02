import React from 'react'

const ResetPassword = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-3 '>
        <div className='space-y-2 text-center pb-2'>
            <h1 className='font-bold text-3xl'>Forgot password</h1>
            <p className='text-muted-foreground text-sm font-medium'>
                Enter email associated with the devlinker account to receive a reset link.
            </p>
        </div>
    </div>
  )
}

export default ResetPassword