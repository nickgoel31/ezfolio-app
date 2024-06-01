"use client"

import { TiptapQuestionReadOnly } from '@/components/tiptap-read-only'

import { useCurrentUser } from '@/hooks/useCurrentUser'
import { QuestionPost } from '@prisma/client'
import React from 'react'

const QuestionPostContent = ({question}:{question:QuestionPost}) => {
    const currentUser = useCurrentUser()
    const isPostCreator = question.userId === currentUser?.id || false


  return (
    <div className='space-y-6  '>
        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col'>
            <h1 className='text-3xl font-bold leading-normal'>{question.title}</h1>
          </div>
        </div>

        {/* <TiptapQuestionReadOnly description={question.description} isPostCreator={isPostCreator}/> */}
    </div>
  )
}

export default QuestionPostContent