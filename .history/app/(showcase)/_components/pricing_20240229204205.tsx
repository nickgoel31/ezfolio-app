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

        <div className='flex flex-col lg:flex-row flex-wrap gap-8'>
            {pricingList.map((pricing) => (
                <div key={pricing.id} className='border rounded-xl w-72'>
                    <div className='rounded-xl shadow-md bg-foreground/5 w-full p-4 px-5'>
                        <h3 className='font-semibold text-2xl'>{pricing.title}</h3>
                        <p className=''>{pricing.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing