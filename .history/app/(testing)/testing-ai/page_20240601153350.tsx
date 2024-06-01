"use client"

import { googleGeminiGenerativeAi } from '@/ai-generative'
import React from 'react'

const AITest = () => {
  const [text, setText] = useState("")
  const handleClick = async() => {
    text = await googleGeminiGenerativeAi()
  }
  return (
    <div onClick={handleClick}>
      <div>Run</div>
      <p>{text}</p>
    </div>
  )
}

export default AITest