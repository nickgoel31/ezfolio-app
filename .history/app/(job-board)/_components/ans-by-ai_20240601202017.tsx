import { googleGeminiGenerativeAi } from '@/ai-generative'
import { QuestionPost } from '@prisma/client'
import React from 'react'

const AnswerByAI = async ({question}:{question:QuestionPost}) => {

    const answer = await googleGeminiGenerativeAi(question.title, question.description)

  return (
    <div className='font-medium text-sm dark:text-violet-200 text-violet-800 w-full p-4 border rounded-lg bg-violet-900/10 border-violet-600/20'>
        <h1 className='text-xl font-semibold leading-normal'>Answer by EzBuddy <span className='text-xs p-1 px-3 font-semi bg-foreground text-background rounded-lg'>BETA</span></h1>

        <p>{answer}</p>
    </div>
  )
}

export default AnswerByAI