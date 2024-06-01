"use client"

import { googleGeminiGenerativeAi, googleGeminiGenerativeAiChat, googleGeminiGenerativeAiImage } from '@/ai-generative'
import React, { useState } from 'react'

const AITest = () => {
  const [text, setText] = useState("")
  const handleClick = async() => {
    const msg = await googleGeminiGenerativeAiChat()
    setText(msg)
  }
  return (
    <div >
      {/* <div onClick={handleClick}>Run</div>
      <p>{text}</p> */}
    </div>
  )
}

export default AITest