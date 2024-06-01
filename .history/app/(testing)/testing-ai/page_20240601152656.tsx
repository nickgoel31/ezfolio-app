

import { googleGeminiGenerativeAi } from '@/ai-generative'
import React from 'react'

const AITest = () => {
  const handleClick = () => {
    googleGeminiGenerativeAi()
  }
  return (
    <div onClick={handleClick}>AITest</div>
  )
}

export default AITest