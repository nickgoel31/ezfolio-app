"use client"

import { googleGeminiGenerativeAi, googleGeminiGenerativeAiChat, googleGeminiGenerativeAiImage } from '@/ai-generative'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
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
    <div className='relative w-full min-h-screen overflow-x-hidden mx-auto py-10 px-2 pb-32'>
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      <h1>Ask anything</h1>
      {/* <div className='space-y-4'>
        {messages.map((msg,index) => (
          <div key={index} className={`p-2 rounded-lg ${msg.role === 'user' ? 'bg-foreground/5 text-foreground' : 'bg-violet-400/10 text-foreground'}`}>{msg.message}</div>
        ))}
        <div className="ai-response">
          {isLoading && <div className="message model">Loading...</div>}
        </div>
      </div>
      <div className='fixed bottom-10 left-1/2 -translate-x-1/2 p-2 rounded-lg bg-foreground/5  z-[10]'>
        <form action={handleClick} className='flex gap-2 items-center'>
          <Textarea ref={inputRef} className='w-96 h-12 max-h-64 min-h-12' placeholder='Write something here' onChange={(e) => setText(e.target.value)}/>
          <Button type='submit' size={"icon"}><FaPaperPlane size={20}/></Button>
        </form>
      </div> */}
    </div>
  )
}

export default AITest