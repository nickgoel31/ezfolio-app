import { featuresList } from '@/data'
import React from 'react'

const Features = () => {
  return (
    <div className='w-full flex flex-col items-center space-y-7'>
        <div className='text-center space-y-1'>
            <h2 className='font-bold text-4xl'>Features</h2>
            <p className='text-sm text-muted-foreground font-medium'>
                Streamline Your Showcase with ease
            </p>
        </div>

        <div className='w-full max-w-screen-xl grid grid-cols-3 gap-4'>
            {featuresList.map((f,index) => (
                <div key={index}>
                    <h3 className='font-bold text-lg'>{f.title}</h3>
                    <p className='text-sm text-muted-foreground font-medium'>{f.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features