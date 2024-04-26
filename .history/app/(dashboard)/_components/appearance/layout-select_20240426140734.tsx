"use client"

import { updateColorSchemeOnUserPage } from '@/actions/colorscheme/update-colorscheme'
import { updateLayoutOfUserPage } from '@/actions/pagelayout/update-layout'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Props{
    layouts:Layout[],
    currentLayout:Layout,
    userPageId:string
}
interface Layout {
    id:number,
    layoutName:string,
}

const LayoutSelect = ({layouts,currentLayout,userPageId}:Props) => {

    const [pageLayoutState, setPageLayoutState] = useState<number>(currentLayout.id)
    const {theme = useTheme()

    useEffect(() => {
        updateLayoutOfUserPage(pageLayoutState,userPageId)
    },[pageLayoutState,userPageId])


  return (
    <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-2'>
            <div className='flex items-center justify-between w-full'>
                <h4 className='text-lg font-medium'>Page Layout</h4>
               
              
            </div>
            <div className='flex flex-row flex-wrap w-full gap-4'>
                {layouts.map((layout) => (
                    <div onClick={() => setPageLayoutState(layout.id)} key={layout.id} className={cn('rounded-xl flex flex-col gap-2 items-center justify-center text-neutral-100 px-3 p-3 text-center cursor-pointer border',pageLayoutState === layout.id && "outline outline-offset-2 outline-indigo-700")}>
                        <Image src={`/layout${layout.id}-dark.png`} alt='layout1' width={1000} height={1000} className='w-full h-14'/>
                    <h6 className='font-medium'>{layout.layoutName}</h6>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default LayoutSelect