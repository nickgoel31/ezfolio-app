"use client"

import { useTheme } from "next-themes"
import { useState } from "react"

const ThemeToggle = () => {
    const { setTheme,theme } = useTheme()

    const [currentTheme,setCurrentTheme ] = useState(theme)

    const handleDarkTheme = () => {
        setTheme('dark')
        setCurrentTheme('dark')
    }
    const handleLightTheme = () => {
        setTheme('light')
        setCurrentTheme('light')
    }
    const handleSystemTheme = () => {
        setTheme('system')
        setCurrentTheme('system')
    }

  return (
    <div className='text-sm font-medium'>
        <div>
            {currentTheme === 'dark' ? (
                <button onClick={handleLightTheme}>
                    Light
                </button>
            ) : (
                <button onClick={handleDarkTheme}>
                    Dark
                </button>
            )}
        </div>
    </div>
  )
}

export default ThemeToggle