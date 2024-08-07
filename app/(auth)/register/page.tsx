import React from 'react'
import RegisterForm from '../_components/register-form'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const RegisterPage = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-3'>
        <div className='space-y-2 text-center pb-3'>
            <h1 className='font-bold text-3xl'>Create a Ezfolio profile</h1>
            <p className='text-muted-foreground text-sm font-medium'>
                Fill out the form to create your own Ezfolio profile.
            </p>
        </div>
        
        <RegisterForm />

        <Button variant={"link"} asChild>
          <Link href={"/login"}>Already have an account?</Link>
        </Button>

    </div>
  )
}

export default RegisterPage