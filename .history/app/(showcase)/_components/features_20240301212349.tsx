import { featuresList } from '@/data'
import React from 'react'

const Features = () => {
  return (
    <div id='features' className='w-full flex flex-col items-center space-y-7'>
        <div className='text-center space-y-1'>
            <h2 className='font-bold text-4xl'>Features</h2>
            <p className='text-sm text-muted-foreground font-medium'>
                Streamline Your Showcase with ease
            </p>
        </div>

        <div className='w-full max-w-screen-lg flex flex-col gap-4'>
            {/* {featuresList.map((f,index) => (
                <div key={index} className='dark:features-card-dark border flex flex-col rounded-xl border-foreground/10 shadow-sm  p-[1px] h-64  relative group overflow-hidden w-full transition'>

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
            ))} */}
            <div className='w-full flex flex-col md:flex-row gap-4'>
                <div className='flex-[1.7] w-full h-80 rounded-3xl border border-[#131313] bg-gradient-to-tr from-[#dfd5ff05]'>

                </div>
                <div className='flex-[1] w-full h-80 rounded-3xl border border-[#131313] bg-gradient-to-tr from-[#ffffff05]'>

                </div>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-4'>
                <div className='flex-[1] w-full h-80 rounded-3xl border border-foreground/5 bg-gradient-to-tr from-[#ffffff05]'>

                </div>
                <div className='flex-[1.7] w-full h-80 rounded-3xl border border-foreground/5 bg-gradient-to-tr from-[#ffffff05]'>

                </div>
            </div>

        </div>
    </div>
  )
}

export default Features