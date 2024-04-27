"use client"

import { Switch } from '@/components/ui/switch'
import React from 'react'

interface Props{
    userPageId:string,
    isAdvancedPortfolioToggled: boolean
}

const ModernPortfolioToggle = ({userPageId,isAdvancedPortfolioToggled}:Props) => {

    const handleToggle = () => {
        
    }

  return (
    <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-2'>
        <div className='flex items-center w-full justify-between'>
            <div className='flex items-center w-full gap-3'>
                <h4 className='text-lg font-medium'>Advanced Portfolio</h4>
                <p className='bg-foreground text-background rounded-sm px-1 font-bold text-sm'>BETA</p>
            </div>

            <Switch onClick={handleToggle} defaultChecked={isAdvancedPortfolioToggled}/>
        </div>
    </div>
  )
}

export default ModernPortfolioToggle