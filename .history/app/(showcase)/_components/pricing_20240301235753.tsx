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
            <div onClick={toggleDetailedMode} className='flex items-center gap-3 font-medium text-sm'>
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
                <motion.div key={pricing.id} className={cn('border border-[#131313] rounded-xl w-[23rem] overflow-hidden  bg-gradient-to-t from-violet-800/10 via-transparent to-transparent transition h-[218px] ', detailedMode && 'h-[560px]')}>
                    <div className='rounded-xl shadow-md border border-[#131313]  bg-gradient-to-tr from-[#141414] to-[#080808] w-full p-5 px-6 space-y-3'>
                        <div className='space-y-1'>
                            <h3 className='font-semibold text-2xl'>{pricing.title}</h3>
                            <p className='text-sm font-medium text-muted-foreground'>{pricing.desc}</p>
                        </div>

                        <div className='flex items-end gap-1'>
                            <span className='font-semibold text-3xl'>${pricing.price}</span>
                            <span className='text-muted-foreground font-medium text-sm'>/per month</span>
                        </div>

                        <div className='pt-2'>
                            <Button disabled={pricing.id===2} className='w-full bg-gradient-to-t shadow-sm from-violet-950 via-violet-950 to-violet-900 text-white'>{pricing.buttonLabel}</Button>
                        </div>
                    </div>

                    {detailedMode && (
                        <div className=' p-5 py-5'>
                            {pricing.id === 2 && (
                                <p className='text-muted-foreground text-xs font-medium mb-5'>All the features in free plan, plus</p>
                            )}
                            <ul className='space-y-3'>
                                {pricing.features.map((feature, index) => (
                                    <div className='space-y-3'>
                                        <li key={index} className='flex items-center gap-1 text-muted-foreground text-sm font-medium'>
                                            <CheckCircle size={15}/>
                                            {feature}
                                        </li>
                                        {index !== pricing.features.length - 1 && <hr />}
                                        
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