"use client"

import { MoonIcon, SunIcon } from "lucide-react"
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
                    <MoonIcon />
                </button>
            ) : (
                <button onClick={handleDarkTheme}>
                    <SunIcon />
                </button>
            )}
        </div>
    </div>
  )
}

export default ThemeToggle