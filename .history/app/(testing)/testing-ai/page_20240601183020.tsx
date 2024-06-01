"use client"

import { googleGeminiGenerativeAi, googleGeminiGenerativeAiChat, googleGeminiGenerativeAiImage } from '@/ai-generative'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MessagesSquareIcon } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

interface HistoryMessage {
  role: string,
  message: string
}

const AITest = () => {
  const [text, setText] = useState("")
  const [aiResponse, setAiResponse] = useState("")
  const [messages,setMessages] = useState<HistoryMessage[]>([])
  const [isLoading,setIsLoading] = useState(false)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const handleClick = () => {
    // Step 1: Update state with user's message instantly
    setMessages(prev => [...prev, { role: "user", message: text }]);
    setText(''); // Clear the input field

    // Step 2: Set loading state
    setIsLoading(true);
    if(inputRef.current){
      inputRef.current.value = ""
    }
  };

  useEffect(() => {
    const fetchAIResponse = async () => {
      if (isLoading) {
        const userMessage = messages[messages.length - 1].message;
        const msg = await googleGeminiGenerativeAiChat(userMessage, messages);
        
        // Step 3: Update state with AI's response
        setAiResponse(msg);
        setMessages(prev => [...prev, { role: "model", message: msg }]);
        setIsLoading(false);
      }
    };

    fetchAIResponse();
  }, [isLoading]);
  return (
    <div className='relative w-full min-h-screen h-[300vh] overflow-x-hidden mx-auto py-10 px-2 pb-32'>
      <div className="fixed bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="fixed bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      <div className='w-full max-w-screen-sm mx-auto space-y-6'>
        <div className='flex flex-col gap-4 items-center'>
          <div className='border rounded-lg p-3 bg-foreground/10 '>
            <MessagesSquareIcon className='' size={21}/>
          </div>
          <div className='text-center'>
            <h1 className='font-semibold text-6xl leading-normal font-poppins text-center'>Hi, I'm <span className='bg-gradient-to-tr from-teal-200 via-indigo-200 to-rose-200 bg-clip-text text-transparent'>EzBuddy</span></h1>
            <p className='font-medium text-sm text-muted-foreground'>
              I'm a chatbot powered by <span className='bg-gradient-to-tr from-teal-200 via-indigo-200 to-rose-200 bg-clip-text text-transparent'>Google's Gemini AI</span>. Ask me anything!
            </p>
          </div>
        </div>
      </div>
      <div className='space-y-4'>
        {messages.map((msg,index) => (
          <div key={index} className={`p-2 rounded-lg ${msg.role === 'user' ? 'bg-foreground/5 text-foreground' : 'bg-violet-400/10 text-foreground'}`}>{msg.message}</div>
        ))}
        <div className="ai-response">
          {isLoading && <div className="message model">Loading...</div>}
        </div>
      </div>
      <div className='fixed bottom-10 left-1/2 -translate-x-1/2 p-2 rounded-lg bg-gradient-to-tr from-teal-200 via-indigo-200 to-rose-200  z-[10]'>
        <form action={handleClick} className='flex gap-2 items-center'>
          <Textarea ref={inputRef} className='w-96 h-12 max-h-64 min-h-12' placeholder='Write something here' onChange={(e) => setText(e.target.value)}/>
          <Button type='submit' size={"icon"}><FaPaperPlane size={20}/></Button>
        </form>
      </div>
    </div>
  )
}

export default AITest