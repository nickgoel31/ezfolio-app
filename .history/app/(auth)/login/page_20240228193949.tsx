import React from 'react'
import LoginForm from '../_components/login-form'

const LoginPage = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-6'>
        <div className='space-y-2 text-center'>
            <h1 className='font-bold text-3xl'>Welcome back</h1>
            <p className='text-muted-foreground text-sm font-medium'>
                Fill out the form to create your own Devlinker profile.
            </p>
        </div>
        
        <LoginForm />

    </div>
  )
}

export default LoginPage