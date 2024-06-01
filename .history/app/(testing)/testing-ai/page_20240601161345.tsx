"use client"

import { googleGeminiGenerativeAi, googleGeminiGenerativeAiImage } from '@/ai-generative'
import React, { useState } from 'react'

const AITest = () => {
  const [text, setText] = useState("")
  const handleClick = async() => {
    const msg = await googleGeminiGenerativeAiImage()
    setText(msg)
  }
  return (
    <div >
      <div onClick={handleClick}>Run</div>
      <p>{text}</p>
    </div>
  )
}

export default AITest