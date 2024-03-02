"use client"

import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { pricingList } from '@/data'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import {motion} from "framer-motion"
import { CheckCircle } from 'lucide-react'

const Pricing = () => {

    const [detailedMode, setDetailedMode] = useState(false)

    function toggleDetailedMode (){
        setDetailedMode(!detailedMode)
    }

  return (
    <div className='w-full flex flex-col items-center space-y-7 relative'>
        <div className='absolute top-8 right-7'>
            <div onClick={toggleDetailedMode} className='flex items-center gap-3'>
                <p>{detailedMode ? `Hide Details`: `Detailed Mode`}</p>
                <Switch checked={detailedMode}/>  
            </div>
        </div>

        <div className='text-center space-y-1'>
            <h2 className='font-bold text-4xl'>Pricing</h2>
            <p className='text-sm text-muted-foreground font-medium'>
                Let&apos;s talk about money, shall we?
            </p>
        </div>

        <div className='flex flex-col lg:flex-row flex-wrap gap-8'>
            {pricingList.map((pricing) => (
                <motion.div key={pricing.id} className={cn('border rounded-xl w-[23rem] overflow-hidden  bg-gradient-to-t from-neutral-800/50 via-transparent to-transparent transition h-[218px]', detailedMode && 'h-[500px]')}>
                    <div className='rounded-xl shadow-md bg-foreground/5 w-full p-4 px-5 space-y-3'>
                        <div className='space-y-1'>
                            <h3 className='font-semibold text-2xl'>{pricing.title}</h3>
                            <p className='text-sm font-medium text-muted-foreground'>{pricing.desc}</p>
                        </div>

                        <div className='flex items-end gap-1'>
                            <span className='font-semibold text-3xl'>${pricing.price}</span>
                            <span className='text-muted-foreground font-medium text-sm'>/per month</span>
                        </div>

                        <div className='pt-2'>
                            <Button className='w-full bg-gradient-to-t from-neutral-800 via-neutral-800 to-neutral-700 text-white'>{pricing.buttonLabel}</Button>
                        </div>
                    </div>

                    {detailedMode && (
                        <div className=' p-4'>
                            <ul className='space-y-4'>
                                {pricing.features.map((feature, index) => (
                                    <div className='space-y-4'>
                                        <li key={index} className='flex items-center gap-1 text-muted-foreground text-sm font-medium'>
                                            <CheckCircle size={15}/>
                                            {feature}
                                        </li>
                                        <hr />
                                    </div>
                                ))}
                                
                            </ul>
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default Pricing