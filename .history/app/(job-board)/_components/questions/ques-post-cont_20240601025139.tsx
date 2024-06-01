import TiptapReadOnly from '@/components/tiptap-read-only'
import { getCurrentUser } from '@/helpers/get-user'
import { QuestionPost } from '@prisma/client'
import React from 'react'

const QuestionPostContent = ({question}:{question:QuestionPost}) => {
    const currentUser = getCurrentUser()
    const isPostCreator = currentUser.id
  return (
    <div className='space-y-6 lg:px-24 '>
        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold leading-normal'>{question.title}</h1>
          </div>
        </div>

        <TiptapReadOnly description={question.description} isPostCreator={isPostCreator}/>
    </div>
  )
}

export default QuestionPostContent