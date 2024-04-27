"use client"

import { updateUserPageAdvancedPortfolioToggleValue } from '@/actions/userpage/edit'
import { Switch } from '@/components/ui/switch'
import { cn } from '@/lib/utils'
import { AdvancedPortfolioTheme } from '@prisma/client'
import React, { useState } from 'react'

interface Props{
    userPageId:string,
    isAdvancedPortfolioToggled: boolean,
    advancedPortfolioThemes: AdvancedPortfolioTheme[],
    currentAdvancedPortfolioTheme: AdvancedPortfolioTheme
}

const ModernPortfolioToggle = ({userPageId,isAdvancedPortfolioToggled,advancedPortfolioThemes,currentAdvancedPortfolioTheme}:Props) => {

    const [isAdvancedPortfolioToggledState, setIsAdvancedPortfolioToggledState] = useState(isAdvancedPortfolioToggled)
    const [currentAdvancedPortfolioThemeState, setIsAdvancedPortfolioThemeState] = useState<number>(currentAdvancedPortfolioTheme.id)

    const handleToggle = () => {
        setIsAdvancedPortfolioToggledState(!isAdvancedPortfolioToggledState)
        updateUserPageAdvancedPortfolioToggleValue(userPageId,!isAdvancedPortfolioToggledState)
    }

  return (
    <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-2'>
        <div className='flex items-center w-full justify-between'>
            <div className='flex items-center w-full gap-3'>
                <h4 className='text-lg font-medium'>Advanced Portfolio</h4>
                <p className='bg-foreground text-background rounded-sm px-1 font-bold text-sm'>BETA</p>
            </div>

            <Switch onClick={handleToggle} checked={isAdvancedPortfolioToggledState}/>
        </div>

        {}
    </div>
  )
}

export default ModernPortfolioToggle