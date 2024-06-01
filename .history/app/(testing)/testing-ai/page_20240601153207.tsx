"use client"

import { googleGeminiGenerativeAi } from '@/ai-generative'
import React from 'react'

const AITest = () => {
  const handleClick = async() => {
    await googleGeminiGenerativeAi()
  }
  return (
    <div onClick={handleClick}>
      <div>Run</div>
      <p></p>
    </div>
  )
}

export default AITest