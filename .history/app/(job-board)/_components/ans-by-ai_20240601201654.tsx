import { QuestionPost } from '@prisma/client'
import React from 'react'

const AnswerByAI = ({question}:{question:QuestionPost}) => {

    googleGeminiGenerativeAi()

  return (
    <div className='font-medium text-sm dark:text-violet-200 text-violet-800 w-full p-4 border rounded-lg bg-violet-900/10 border-violet-600/20'>
        <h1 className='text-xl font-semibold leading-normal'>Answer by EzBuddy</h1>
    </div>
  )
}

export default AnswerByAI