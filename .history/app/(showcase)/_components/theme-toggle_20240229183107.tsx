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
                <div className="p-1 rounded-full hover:bg-foreground/10 transition" onClick={handleLightTheme}>
                    <SunIcon size={18} className=""/>
                </div>
            ) : ( 
                <div className="p-1 rounded-full hover:bg-foreground/10 transition" onClick={handleDarkTheme}>
                    <MoonIcon size={18} className=""/>
                </div> 
            )}
        </div>
    </div>
  )
}

export default ThemeToggle