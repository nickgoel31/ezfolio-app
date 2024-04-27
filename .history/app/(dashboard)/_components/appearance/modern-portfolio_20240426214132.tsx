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
    const [pageLayoutState, setPageLayoutState] = useState<number>(currentLayout.id)

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

        <div className='flex flex-row flex-wrap w-full gap-4'>
            {advancedPortfolioThemes.map((theme) => (
                <div onClick={() => setPageLayoutState(layout.id)} key={layout.id} className={cn('rounded-xl flex flex-col gap-2 items-center justify-center text-neutral-100 px-3 p-3 text-center cursor-pointer border',pageLayoutState === layout.id && "outline outline-offset-2 outline-indigo-700")}>
                    {/* <Image src={`/layout${layout.id}-dark.png`} alt='layoutimg' width={1000} height={1000} className='w-full h-14'/> */}
                    <h6 className='font-medium'>{layout.layoutName}</h6>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ModernPortfolioToggle