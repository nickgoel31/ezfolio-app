"use client"

import { googleGeminiGenerativeAi } from '@/ai-generative'
import { TiptapAnswerAutomaticEzBuddyReadOnly } from '@/components/tiptap-read-only'
import { Button } from '@/components/ui/button'
import { QuestionPost } from '@prisma/client'
import React, { useState } from 'react'

const AnswerByAI = async ({question}:{question:QuestionPost}) => {

    // const answer = await googleGeminiGenerativeAi(question.title, question.description)

    const [showAIanswer, setShowAIAnswer] = useState<string>("")

    const generateByAI = async () => {
      const answer = await googleGeminiGenerativeAi(question.title, question.description)
      setShowAIAnswer(answer)
    }


  return (
    <>
      <Button onClick={generateByAI}>Generate by AI</Button>

      {showAIanswer }
    </>
  )
}

export default AnswerByAI