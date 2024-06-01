"use client"

import { googleGeminiGenerativeAi, googleGeminiGenerativeAiChat, googleGeminiGenerativeAiImage } from '@/ai-generative'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

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
      <div className='fixed bottom-10 left-1/2 -translate-x-1/2'>
        <Input className='w-96'/>
      </div>
    </div>
  )
}

export default AITest