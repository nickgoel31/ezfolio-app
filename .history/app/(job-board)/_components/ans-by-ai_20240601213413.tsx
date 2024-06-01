import { googleGeminiGenerativeAi } from '@/ai-generative'
import { TiptapAnswerAutomaticEzBuddyReadOnly } from '@/components/tiptap-read-only'
import { QuestionPost } from '@prisma/client'
import React from 'react'

const AnswerByAI = async ({question}:{question:QuestionPost}) => {

    const answer = await googleGeminiGenerativeAi(question.title, question.description)

  return (
    <div className='flex flex-col gap-3 font-medium text-sm dark:text-violet-200 text-violet-800 w-full p-4 border rounded-lg bg-violet-900/10 border-violet-600/20'>
        <h1 className='text-xl font-semibold leading-normal flex items-center gap-1'>Answer by EzBuddy <span className='text-xs p-0.5 px-1.5 font-semibold bg-foreground text-background rounded-md'>BETA</span></h1>

        <p>{answer}</p>

        <TiptapAnswerAutomaticEzBuddyReadOnly answer={answer}/>
    </div>
  )
}

export default AnswerByAI