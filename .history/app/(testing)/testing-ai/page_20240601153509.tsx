"use client"

import { googleGeminiGenerativeAi } from '@/ai-generative'
import React, { useState } from 'react'

const AITest = () => {
  const [text, setText] = useState("")
  const handleClick = async() => {
    const msg = await googleGeminiGenerativeAi()
    setText(msg)
  }
  return (
    <div >
      <div>Run</div>
      <p>{text}</p>
    </div>
  )
}

export default AITest