"use client"

import { googleGeminiGenerativeAi } from '@/ai-generative'
import { TiptapAnswerAutomaticEzBuddyReadOnly } from '@/components/tiptap-read-only'
import { Button } from '@/components/ui/button'
import { QuestionPost } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import {marked} from "marked"
import TurndownService from 'turndown'
import { ThreeDots } from 'react-loader-spinner'

const turndownService = new TurndownService();

export const AnswerByAI = async ({question}:{question:QuestionPost}) => {

    // const answer = await googleGeminiGenerativeAi(question.title, question.description)

    const [showAIanswer, setShowAIAnswer] = useState<string>("")
    const [isLoading,setIsLoading] = useState(false)

    const markdownDescription = turndownService.turndown(question.description)

    const generateByAI = async () => {
      setIsLoading(true)
      const answer = await googleGeminiGenerativeAi(question.title, markdownDescription)
      setShowAIAnswer(answer)
      setIsLoading(false)
    }

    const htmlAIanswer = await marked(showAIanswer)


  return (
    <>
      {!showAIanswer && <Button onClick={generateByAI} disabled={isLoading}>Generate by AI (BETA)</Button>}

      {showAIanswer && (
        <div className='flex flex-col items-start gap-3 font-medium text-sm dark:text-violet-200 text-violet-800 w-full p-4 border rounded-lg bg-violet-900/10 border-violet-600/20'>
          <h1 className='text-xl font-semibold leading-normal flex items-center gap-1'>Answer by EzBuddy <span className='text-xs p-0.5 px-1.5 font-semibold bg-foreground text-background rounded-md'>BETA</span></h1>

          <TiptapAnswerAutomaticEzBuddyReadOnly answer={htmlAIanswer}/>
        </div>
      )}
    </>
  )
}



export const AnswerByAILoading = () => {
  const [timeElapsed,setTimeElapsed] = useState(0)

  return (
    <div className='flex flex-col items-start gap-3 font-medium text-sm dark:text-violet-200 text-violet-800 w-full p-4 border rounded-lg bg-violet-900/10 border-violet-600/20'>
      <h1 className='text-xl font-semibold leading-normal flex items-center gap-1'>Answer by EzBuddy <span className='text-xs p-0.5 px-1.5 font-semibold bg-foreground text-background rounded-md'>BETA</span></h1>
      <div className='w-full flex flex-col gap-0 items-center justify-center pb-6'>
        <ThreeDots
        visible={true}
        height="60"
        width="60"
        color="#8B5CF6"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
        Generating Content (Avg time: 10 sec) ()
      </div>

    </div>
  )
}