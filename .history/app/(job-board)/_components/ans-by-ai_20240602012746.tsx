"use client"

import { googleGeminiGenerativeAi } from '@/ai-generative'
import { TiptapAnswerAutomaticEzBuddyReadOnly } from '@/components/tiptap-read-only'
import { Button } from '@/components/ui/button'
import { QuestionPost } from '@prisma/client'
import React, { useEffect, useState } from 'react'
import {marked} from "marked"
import TurndownService from 'turndown'

const turndownService = new TurndownService();

const AnswerByAI = async ({question}:{question:QuestionPost}) => {

    // const answer = await googleGeminiGenerativeAi(question.title, question.description)

    const [showAIanswer, setShowAIAnswer] = useState<string>("")
    const [isLoading,setIsLoading] = useState(false)
    const [generatedText, setGeneratedText] = useState<string>("");

    const markdownDescription = turndownService.turndown(question.description)

    const generateByAI = async () => {
      setIsLoading(true)
      setShowAIAnswer("");
      setGeneratedText(""); // Reset generated text
      const result = await googleGeminiGenerativeAi(question.title, markdownDescription)
      for await (const chunk of result) {
        setGeneratedText(prevText => prevText + chunk);
      }
      setIsLoading(false)
    }

    useEffect(() => {
      if (generatedText) {
          const convertMarkdownToHTML = async () => {
              const html = await marked(generatedText);
              setShowAIAnswer(html);
          };
          convertMarkdownToHTML();
      }
  }, [generatedText]);

    const htmlAIanswer = await marked(showAIanswer)


  return (
    <>
      {!showAIanswer && (
                <Button onClick={generateByAI} disabled={isLoading}>
                    {isLoading ? "Generating..." : "Generate by AI (BETA)"}
                </Button>
            )}

      {showAIanswer && (
        <div className='flex flex-col items-start gap-3 font-medium text-sm dark:text-violet-200 text-violet-800 w-full p-4 border rounded-lg bg-violet-900/10 border-violet-600/20'>
          <h1 className='text-xl font-semibold leading-normal flex items-center gap-1'>Answer by EzBuddy <span className='text-xs p-0.5 px-1.5 font-semibold bg-foreground text-background rounded-md'>BETA</span></h1>

          <TiptapAnswerAutomaticEzBuddyReadOnly answer={htmlAIanswer}/>
        </div>
      )}
    </>
  )
}

export default AnswerByAI