"use client"

import { updateUserPageAdvancedPortfolioThemeInUserPage, updateUserPageAdvancedPortfolioToggleValue, updateUserPageTagline } from '@/actions/userpage/edit'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { useToast } from '@/components/ui/use-toast'
import { cn } from '@/lib/utils'
import { AdvancedPortfolioTheme } from '@prisma/client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Props{
    userPageId:string,
    isAdvancedPortfolioToggled: boolean,
    advancedPortfolioThemes: AdvancedPortfolioTheme[],
    currentAdvancedPortfolioTheme: AdvancedPortfolioTheme,
    tagline:string | null
}

//DEBOUNCING

function debounce(func:Function, delay:number) {
    let timer: ReturnType<typeof setTimeout>;
    return function(...args:any) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args)
        }, delay);
    }
}

const ModernPortfolioToggle = ({userPageId,isAdvancedPortfolioToggled,advancedPortfolioThemes,currentAdvancedPortfolioTheme,tagline}:Props) => {

    const [isAdvancedPortfolioToggledState, setIsAdvancedPortfolioToggledState] = useState(isAdvancedPortfolioToggled)
    const [currentAdvancedPortfolioThemeState, setIsAdvancedPortfolioThemeState] = useState<number>(currentAdvancedPortfolioTheme.id)

    const [taglineState, setTaglineState] = useState<string>(tagline || "")

    const { toast } = useToast()

    useEffect(() => {
        const delayedUpdate = debounce(updateUserPageTagline,3000);
        delayedUpdate(userPageId,taglineState)
    },[
        taglineState
    ])

    useEffect(() => {
        updateUserPageAdvancedPortfolioThemeInUserPage(userPageId,currentAdvancedPortfolioThemeState)
    },[currentAdvancedPortfolioTheme, userPageId])

    const handleToggle = () => {
        setIsAdvancedPortfolioToggledState(!isAdvancedPortfolioToggledState)
        updateUserPageAdvancedPortfolioToggleValue(userPageId,!isAdvancedPortfolioToggledState)
        if(!isAdvancedPortfolioToggledState){
            toast({
                title: "Advanced Portfolio turned on",
                description: "Now you can make your portfolio look modern!",
            })
        }else{
            toast({
                title: "Advanced Portfolio turned off",
                description: "Simple portfolios can also make a huge difference.",
            })
        }
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

        {isAdvancedPortfolioToggledState && (
            <div className='flex flex-col w-full gap-6'>
                <div className='space-y-2'>
                    <h4 className='font-medium'>Tagline</h4>
                    <Input placeholder='Add a tagline for your portfolio.' defaultValue={taglineState} onChange={(e) => setTaglineState(e.target.value)} />
                </div>
                <div className='space-y-3'>
                    <h4 className='font-medium'>Page Theme</h4>

                    <div className='flex flex-row flex-wrap w-full gap-4'>
                        {advancedPortfolioThemes.map((theme) => (
                            <div onClick={() => setIsAdvancedPortfolioThemeState(theme.id)} key={theme.id} className={cn('w-64  h-40 rounded-xl flex flex-col gap-2 items-center justify-center text-neutral-100 p-1 relative text-center cursor-pointer border',currentAdvancedPortfolioThemeState === theme.id && "outline outline-offset-2 outline-indigo-700")} >
                                {theme.thumbnailUrl && (
                                    <Image src={theme.thumbnailUrl} width={1000} height={1000} className='rounded-xl object-cover w-full h-full' alt={theme.themeName} />
                                )}

                                <div className='absolute bottom-0 w-full p-3 bg-black/60 backdrop-blur-md'>

                                </div>
                            
                                {/* <h6 className='font-medium z-[2]'>{theme.themeName}</h6> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
    </div>
  )
}

export default ModernPortfolioToggle