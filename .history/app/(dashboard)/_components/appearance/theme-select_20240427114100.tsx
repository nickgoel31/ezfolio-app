"use client"

import { updateColorSchemeOnUserPage } from '@/actions/colorscheme/update-colorscheme'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

interface Props{
    schemes:Scheme[],
    currentScheme:Scheme,
    userPageId:string,
    isAdvancedPortfolioToggled:boolean
}
interface Scheme {
    id:number,
    fgColor:string,
    firstBgColor:string,
    secondBgColor:string | null,
    thirdBgColor:string | null,
    cardColor:string,
    cardFgColor:string,
    buttonBgColor:string,
    buttonFgColor:string,
    name:string
}

const ThemeSelect = ({schemes,currentScheme,userPageId,isAdvancedPortfolioToggled}:Props) => {

    const [colorSchemeState,setColorSchemeState] = useState<number>(currentScheme.id)

    useEffect(() => {
        updateColorSchemeOnUserPage(colorSchemeState,userPageId)
    },[colorSchemeState,userPageId])


    function handleDeleteAllThemes () {
        // deleteAllColorSchemes()
    }

  return (
    <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-2'>
            <div className='flex items-center justify-between w-full'>
                <h4 className='text-lg font-medium'>Themes</h4>
               
              
            </div>
            <div className='flex flex-row flex-wrap w-full gap-4'>
                {schemes.map((scheme) => (
                    <div onClick={() => setColorSchemeState(scheme.id)} key={scheme.id} className={cn('w-28  h-28 rounded-xl flex items-center justify-center text-neutral-100 px-3 p-3 text-center cursor-pointer border',colorSchemeState === scheme.id && "outline outline-offset-2 outline-indigo-700")} style={{backgroundColor: `${scheme.firstBgColor}`, color:`${scheme.fgColor}`, background: `linear-gradient(45deg, ${scheme.firstBgColor} 0%, ${scheme.secondBgColor} 50%,${scheme.thirdBgColor} 100%)`}}>
                    <h6 className='font-medium'>{scheme.name}</h6>
                    </div>
                ))}
            </div>
            <p className='text-xs font-medium text-yellow-500 pt-2'>
                When advanced portfolio is toggled, the theme will not be applied.
            </p>
    </div>
  )
}

export default ThemeSelect