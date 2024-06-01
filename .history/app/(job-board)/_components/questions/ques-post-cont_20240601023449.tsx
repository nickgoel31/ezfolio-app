import { QuestionPost } from '@prisma/client'
import React from 'react'

const QuestionPostContent = ({question}:{question:QuestionPost}) => {
  return (
    <div className='space-y-10 lg:px-24 '>
        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col'>
            <h1 className='text-4xl font-bold leading-normal'>{question.title}</h1>
          </div>
        </div>
    </div>
  )
}

export default QuestionPostContent