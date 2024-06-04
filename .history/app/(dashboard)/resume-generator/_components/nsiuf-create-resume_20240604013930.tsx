"use client"

import React, { useState } from 'react'

import { cn } from '@/lib/utils'
import ResumeGeneratorFormNSIU from './nsiu-resume-form'

const NotSignedInUserFormForCreatingResume = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<number>(1)
  return (
    <body className='relative w-full h-full flex items-center justify-center flex-col gap-4 font-poppins'>
        <div className="fixed bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] z-[-100] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,#99F6E415,rgba(255,255,255,0))]"></div>
        <div className="fixed bottom-0 right-[-20%] top-[20%] h-[500px] z-[-100] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,#4F46E515,rgba(255,255,255,0))]"></div>

        <div className='w-full max-w-screen-sm mx-auto flex flex-col gap-4'>
            <div className='space-y-1'>
                <h1 className='font-bold text-4xl text-center'>Resume Generator</h1>
                <p className='text-center text-muted-foreground'>Create a resume with ease</p>
            </div>

            <div className='flex flex-col items-start gap-4'>
                <div className='flex flex-col items-start gap-3'>
                    <h3 className='font-medium text-lg'>Choose Template</h3>

                    <ResumeGeneratorFormNSIU />

                </div>
            </div>
        </div>
    </body>
  )
}

export default NotSignedInUserFormForCreatingResume