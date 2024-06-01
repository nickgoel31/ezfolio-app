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
  const [messages,setMessages] = useState<HistoryMessage[]>([{role:"user", message:"Hello how are you?"},{role:"model", message:"I'm doing fine!"}])
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
    <div className='max-w-screen-sm mx-auto py-10 px-2 pb-32'>
      {/* <div onClick={handleClick}>Run</div>
      <p>{text}</p> */}
      <div className='space-y-4'>
        {messages.map((msg,index) => (
          <div key={index} className={`p-2 rounded-lg ${msg.role === 'user' ? 'bg-foreground/5 text-foreground' : 'bg-violet-400/10 text-foreground'}`}>{msg.message}</div>
        ))}
        <div className="ai-response">
          {isLoading && <div className="message model">Loading...</div>}
        </div>
      </div>
      <div className='fixed bottom-10 left-1/2 -translate-x-1/2 p-2 rounded-lg bg-foreground/5  z-[10]'>
        <form action={handleClick} className='flex gap-2 items-center'>
          <Textarea ref={inputRef} className='w-96 h-12 max-h-46 min-h-12' placeholder='Write something here' onChange={(e) => setText(e.target.value)}/>
          <Button type='submit' size={"icon"}><FaPaperPlane size={20}/></Button>
        </form>
      </div>
    </div>
  )
}

export default AITest