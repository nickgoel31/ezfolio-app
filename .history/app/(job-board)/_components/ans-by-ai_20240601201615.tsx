import { QuestionPost } from '@prisma/client'
import React from 'react'

const AnswerByAI = ({question}:{question:QuestionPost}) => {
  return (
    <div className='font-medium text-sm dark:text-violet-200 text-violet-800 w-full p-3 border rounded-lg bg-violet-900/10 border-violet-600/20'>
        <h1>Answer by EzBuddy</h1>
    </div>
  )
}

export default AnswerByAI