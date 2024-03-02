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
        <div className="cursor-pointer">
            {currentTheme === 'dark' ? (
                <SunIcon size={20} className="p-2"/>
            ) : ( 
                <MoonIcon size={20}/>  
            )}
        </div>
    </div>
  )
}

export default ThemeToggle