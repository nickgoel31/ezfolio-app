"use client"

import TiptapReadOnly from '@/components/tiptap-read-only'
import { Answer, QuestionPost } from '@prisma/client'
import React from 'react'

const AnswersContent = async ({answers}:{answers:Answer[]}) => {
    const currentUser = useCurrentUser()
    const isPostCreator = answer.userId === currentUser?.id || false

  return (
    <div className='space-y-6  '>
        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col'>
            <h1 className='text-3xl font-bold leading-normal'>Answers</h1>
          </div>
        </div>

        {answers.map((answer) => (
            <div key={answer.id}>
                <TiptapReadOnly description={answer.answer} isPostCreator={isPostCreator}/>
            </div>
        ))}

        {/*  */}
    </div>
  )
}

export default AnswersContent