import React from 'react'

const VerifyEmailPage = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
        <div className='space-y-2 text-center pb-2'>
            <h1 className='font-bold text-3xl'>Verifying email</h1>
            <p className='text-muted-foreground text-sm font-medium'>
                Please wait while we verify your email address.
            </p>
        </div>
    </div>
  )
}

export default VerifyEmailPage