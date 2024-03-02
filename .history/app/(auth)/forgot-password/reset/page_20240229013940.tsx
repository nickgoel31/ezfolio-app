
import { useSearchParams } from 'next/navigation'
import React from 'react'
import PasswordChangeForm from '../../_components/password-change-form'

const ResetPassword = async () => {

    

  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-3 '>
        <div className='space-y-2 text-center pb-2'>
            <h1 className='font-bold text-3xl'>Change your password</h1>
            <p className='text-muted-foreground text-sm font-medium'>
                Fill out the form below and click reset!
            </p>
        </div>

        <PasswordChangeForm />


    </div>
  )
}

export default ResetPassword