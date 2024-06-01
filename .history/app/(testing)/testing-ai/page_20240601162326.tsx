"use client"

import { googleGeminiGenerativeAi, googleGeminiGenerativeAiChat, googleGeminiGenerativeAiEmbedding, googleGeminiGenerativeAiImage } from '@/ai-generative'
import React, { useState } from 'react'

const AITest = () => {
  const [text, setText] = useState<ContentEmbedding>([])
  const handleClick = async() => {
    const msg = await googleGeminiGenerativeAiEmbedding()
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