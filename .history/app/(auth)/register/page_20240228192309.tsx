import React from 'react'
import RegisterForm from '../_components/register-form'

const RegisterPage = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-4'>
        <div className='space-y-2 text-center'>
            <h1 className='font-bold text-3xl'>Create a Devlinker profile</h1>
            <p className='text-muted-foreground text-sm font-medium'>
                Fill out the form to create your own Devlinker profile.
            </p>
        </div>
        
        <RegisterForm />

    </div>
  )
}

export default RegisterPage