"use client"

import { updateFontOfUserPage, updateFontWeightOfUserPage } from '@/actions/font/update-font'
import { Button } from '@/components/ui/button'
import { fontWeights } from '@/data'
import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

interface Props{
    fonts:Font[],
    currentFont:Font,
    userPageId:string,
    fontWeight: number | null;
}

interface Font {
    id:number,
    family: string,
}

const FontSelect = ({fonts, currentFont, userPageId, fontWeight} : Props) => {

    const [selectedFont, setSelectedFont] = useState(currentFont.id)
    const [selectedFontWeight, setSelectedFontWeight] = useState(fontWeight || 100)

    useEffect(() => {
        updateFontOfUserPage(selectedFont, userPageId)
    },[selectedFont])

    useEffect(() => {
        updateFontWeightOfUserPage(selectedFontWeight, userPageId)
    },[selectedFontWeight])

  return (
    <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-6'>
        <div className='space-y-3'>
            <div className='flex items-center justify-between w-full'>
                <h4 className='text-lg font-semibold'>Fonts</h4>  
            </div>
            <div className='flex flex-row flex-wrap w-full gap-4'>
                {fonts.map((font) => (
                    <div onClick={() => setSelectedFont(font.id)} key={font.id} className={cn('w-28  h-28 rounded-xl flex items-center justify-center  px-4 p-4 text-center cursor-pointer border',selectedFont === font.id && "outline outline-offset-2 outline-indigo-700")} 
                    style={{fontFamily: `${font.family}`}}>
                        <h6 className='font-medium'>{font.family}</h6>
                    </div>
                ))}
            </div>
        </div>

        <div className='space-y-3'>
            <div className='flex items-center justify-between w-full'>
                <h4 className='text-lg font-semibold'>Font Weight</h4>  
            </div>
            <div className='flex flex-row flex-wrap w-full gap-4'>
                {fontWeights.map((weight) => (
                    <div onClick={() => setSelectedFontWeight(weight)} key={weight} className={cn('w-24  h-14 rounded-xl flex items-center justify-center  px-4 p-4 text-center cursor-pointer border',selectedFontWeight === weight && "outline outline-offset-2 outline-indigo-700")} 
                    style={{fontWeight: `${weight}`}}>
                        <h6 className=''>{`Aa`}</h6>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FontSelect