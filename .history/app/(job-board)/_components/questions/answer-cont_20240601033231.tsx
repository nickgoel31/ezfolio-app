"use client"

import TiptapReadOnly from '@/components/tiptap-read-only'
import { formatCreatedAtDate } from '@/helpers/format-date'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import { useUserpageByUserId } from '@/hooks/useUserpageByUserId'
import { Answer, QuestionPost } from '@prisma/client'
import React from 'react'

const AnswersContent = async ({answers}:{answers:Answer[]}) => {
    const currentUser = useCurrentUser()

  return (
    <div className='space-y-6  '>
        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col'>
            <h1 className='text-3xl font-bold leading-normal'>Answers</h1>
          </div>
        </div>

        {answers.map((answer) => {
            const isPostCreator = answer.userId === currentUser?.id || false
            const createdAtDate = answer.createdAt.toString();
            const formattedDate = formatCreatedAtDate(createdAtDate);
            return (
                <div key={answer.id} className='px-4 space-y-2'>
                    <p className='font-medium leading-normal text-sm text-muted-foreground'><span className='font-bold'>Answered by&nbsp;</span>{answer.userId} | {formattedDate}</p>
                    
                    <TiptapReadOnly description={answer.answer} isPostCreator={isPostCreator}/>
                </div>
            )
        })}

        {/*  */}
    </div>
  )
}

export default AnswersContent