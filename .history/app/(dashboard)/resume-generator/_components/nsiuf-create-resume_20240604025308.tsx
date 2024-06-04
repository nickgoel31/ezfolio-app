"use client"

import React, { useState } from 'react'

import { cn } from '@/lib/utils'
import ResumeGeneratorFormNSIU from './nsiu-resume-form'
import Footer from '@/app/(showcase)/_components/footer'

const NotSignedInUserFormForCreatingResume = () => {
  
  return (
    <body className='w-full flex items-center justify-center flex-col gap-4 font-poppins'>
        <div className="fixed bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] z-[-100] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,#99F6E415,rgba(255,255,255,0))]"></div>
        <div className="fixed bottom-0 right-[-20%] top-[20%] h-[500px] z-[-100] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,#4F46E515,rgba(255,255,255,0))]"></div>

        <div className='w-full max-w-screen-sm mx-auto flex flex-col gap-4 h-full py-20'>
            <div className='space-y-1'>
                <h1 className='font-bold text-4xl text-center'>Resume Generator</h1>
                <p className='text-center text-muted-foreground'>Create a resume with ease</p>
            </div>

            <ResumeGeneratorFormNSIU />
        </div>

        <div className='fixed bottom-0 left-0 w-full p-4 border-t bg-background/10 backdrop-blur-xl'>
          <p className='font-medium text-muted-foreground text-center text-sm'>Sign up on Ezfolio to create online portfolios and showcase it to the world! </p>
        </div>
        
    </body>
  )
}

export default NotSignedInUserFormForCreatingResume