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
                <div key={index} className='features-card dark:features-card-dark border flex flex-col rounded-xl border-foreground/10 shadow-sm  p-[2px] h-64  relative transition-all duration-300 group overflow-hidden w-full h-full'>

                    <span className='w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-indigo-500 to-violet-500 z-[1]'/>
                    <div className='bg-background p-4 w-full h-full rounded-lg flex flex-col z-[3]'>
                        <div className='w-full h-full'>

                        </div>
                        <div>
                            <h3 className='font-bold  text-lg features-title group-hover:bg-gradient-to-tr from-indigo-500  to-purple-500 bg-clip-text group-hover:text-transparent text-foreground'>{f.title}</h3>
                            <p className='text-sm text-muted-foreground font-medium'>{f.desc}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features