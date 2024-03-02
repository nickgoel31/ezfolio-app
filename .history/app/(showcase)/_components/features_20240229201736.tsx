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

        <div className='w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {featuresList.map((f,index) => (
                <div key={index} className='dark:features-card-dark border flex flex-col rounded-xl border-foreground/10 shadow-sm  p-[1.2px] h-64  relative group overflow-hidden w-full transition'>

                    <span className='features-border-div w-full h-full absolute -top-[50%] -left-[50%] bg-gradient-to-tr from-blue-500 to-violet-500 z-[-1] group-hover:opacity-100 opacity-0 transition duration-300'/>
                    <div className='features-card bg-background p-4 w-full h-full rounded-xl flex flex-col z-[3] transition-all duration-300 group'>
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