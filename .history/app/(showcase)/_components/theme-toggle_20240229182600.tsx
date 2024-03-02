"use client"

import { useTheme } from "next-themes"
import { useState } from "react"

const ThemeToggle = () => {
    const { setTheme,theme } = useTheme()

    const [currentTheme,setCurrentTheme ] = useState(theme)
  return (
    <div className='text-sm font-medium'>
        ThemeToggle
    </div>
  )
}

export default ThemeToggle