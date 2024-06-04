"use client"

import { googleGeminiGenerativeAi, googleGeminiGenerativeAiChat, googleGeminiGenerativeAiImage } from '@/ai-generative'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

interface HistoryMessage {
  role: string,
  message: string
}

const AITest = () => {
  const [text, setText] = useState("")
  const [aiResponse, setAiResponse] = useState("")
  const [messages,setMessages] = useState<HistoryMessage[]>([{role:"user", message:"Hello how are you?"},{role:"model", message:"I'm doing fine!"}])

  const handleClick = async () => {
    // Step 1: Update state with user's message instantly
  setMessages(prev => [...prev, { role: "user", message: text }]);
  
  // Step 2: Set a loading state for the AI response
  setAiResponse('Loading...');

  // Generate the AI response
  const msg = await googleGeminiGenerativeAiChat(text, messages);

  // Step 3: Update state with the AI's response
  setAiResponse(msg);
  setMessages(prev => [...prev, { role: "model", message: msg }]);
  }
  return (
    <div className='max-w-screen-sm mx-auto py-10 px-2'>
      {/* <div onClick={handleClick}>Run</div>
      <p>{text}</p> */}
      <div className='space-y-4'>
        {messages.map((msg,index) => (
          <div key={index} className={`p-2 rounded-lg ${msg.role === 'user' ? 'bg-foreground/5 text-foreground' : 'bg-violet-400/10 text-foreground'}`}>{msg.message}</div>
        ))}
        <div className="ai-response">
          {aiResponse && <div className="message model">{aiResponse}</div>}
        </div>
      </div>
      <div className='fixed bottom-10 left-1/2 -translate-x-1/2 p-2 rounded-lg bg-foreground/5  z-[10]'>
        <form action={handleClick} className='flex gap-2 items-center'>
          <Input className='w-96' placeholder='Write something here' onChange={(e) => setText(e.target.value)}/>
          <Button type='submit' size={"icon"}><FaPaperPlane size={20}/></Button>
        </form>
      </div>
    </div>
  )
}

export default AITest