import { pricingList } from '@/data'
import React from 'react'

const Pricing = () => {
  return (
    <div className='w-full flex flex-col items-center space-y-7'>
        <div className='text-center space-y-1'>
            <h2 className='font-bold text-4xl'>Pricing</h2>
            <p className='text-sm text-muted-foreground font-medium'>
                Let&apos;s talk about money, shall we?
            </p>
        </div>

        <div className='flex flex-col lg:flex-row flex-wrap'>
            {pricingList.map((pricing) => (
                <div className='border rounded-xl'>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing