import React from 'react'
import LoginForm from '../_components/login-form'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-3'>
        <div className='space-y-2 text-center'>
            <h1 className='font-bold text-3xl'>Welcome back</h1>
            <p className='text-muted-foreground text-sm font-medium'>
                Sign in to your account.
            </p>
        </div>
        
        <LoginForm />

        <Button variant={"link"} asChild>
          <Link href={"/register"}>Don't have an account?</Link>
        </Button>

    </div>
  )
}

export default LoginPage