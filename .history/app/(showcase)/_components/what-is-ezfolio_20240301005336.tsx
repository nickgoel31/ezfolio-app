"use client"
import React, { useState } from 'react'
import { CreateAccountSection, ShareAndConnectSection, ShowcaseWorkSection } from './why/sections'
import { cn } from '@/lib/utils'



const WhatIsApp = () => {
    const [isFirstSection, setIsFirstSection] = useState(true)
    const [isSecondSection, setIsSecondSection] = useState(false)
    const [isThirdSection, setIsThirdSection] = useState(false)

    function handleClickFirstSection(){
        setIsFirstSection(true)
        setIsSecondSection(false)
        setIsThirdSection(false)
    }
    function handleClickSecondSection() {
        setIsFirstSection(false)
        setIsSecondSection(true)
        setIsThirdSection(false)
    }
    function handleClickThirdSection() {
        setIsFirstSection(false)
        setIsSecondSection(false)
        setIsThirdSection(true)
    }

  return (
    <div className='flex w-full flex-col items-center space-y-7'>
        <div className='text-center space-y-1'>
            <h2 className='font-bold text-4xl'>How does Ezfolio work?</h2>
            <p className='text-sm text-muted-foreground font-medium'>
                With Ezfolio, presenting your developer profile has never been easier.
            </p>
        </div>

        <div className='flex flex-col w-full max-w-screen-lg relative items-start justify-start space-y-8'>
            <div className='w-full  flex items-center justify-center gap-16 p-2  z-[4]'>
                <div onClick={handleClickFirstSection} className={cn('w-12 h-12 flex items-center justify-center rounded-full bg-background border cursor-pointer text-sm font-medium select-none', isFirstSection && "bg-gradient-to-t  from-violet-900/40")}>1</div>

                <div onClick={handleClickSecondSection} className={cn('w-12 h-12 flex items-center justify-center rounded-full bg-background border cursor-pointer text-sm font-medium select-none', isSecondSection && "bg-gradient-to-t  from-violet-900/40")}>2</div>

                <div onClick={handleClickThirdSection} className={cn('w-12 h-12 flex items-center justify-center rounded-full bg-background border cursor-pointer text-sm font-medium select-none', isThirdSection && "bg-gradient-to-t  from-violet-900/40")}>3</div>
                
            </div>

            <div className='w-full gap-7 flex flex-col lg:flex-row  relative'>
                <div className='w-full h-[70vh] p-7 px-9'>
                    {isFirstSection && <CreateAccountSection />}

                    {isSecondSection && <ShowcaseWorkSection /> }

                    {isThirdSection && <ShareAndConnectSection />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatIsApp