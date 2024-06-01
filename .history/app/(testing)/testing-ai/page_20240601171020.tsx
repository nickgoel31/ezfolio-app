"use client"

import { googleGeminiGenerativeAi, googleGeminiGenerativeAiChat, googleGeminiGenerativeAiImage } from '@/ai-generative'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const AITest = () => {
  const [text, setText] = useState("")
  const [messages,setMessages] = useState()
  const handleClick = async() => {
    const msg = await googleGeminiGenerativeAiChat()
    setText(msg)
  }
  return (
    <div >
      {/* <div onClick={handleClick}>Run</div>
      <p>{text}</p> */}
      <div className='fixed bottom-10 left-1/2 -translate-x-1/2 p-2 rounded-lg bg-foreground/5 flex '>
        <Input className='w-96' placeholder='Write something here'/>
        <Button size={"icon"}><FaPaperPlane size={20}/></Button>
      </div>
    </div>
  )
}

export default AITest