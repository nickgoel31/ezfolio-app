import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const ForgotPasswordPage = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-3'>
        <div className='space-y-2 text-center pb-3'>
            <h1 className='font-bold text-3xl'>Forgot password</h1>
            <p className='text-muted-foreground text-sm font-medium'>
                Enter email associated with the devlinker account to  receive a reset link.
            </p>
        </div>
        
        

        <Button variant={"link"} asChild>
          <Link href={"/login"}>Back to login</Link>
        </Button>

    </div>
  )
}

export default ForgotPasswordPage