import { featuresList } from '@/data'
import React from 'react'
import { AppearanceShowcaseCard1, AppearanceShowcaseCard2, AppearanceShowcaseCard3, AppearanceShowcaseCard4, FeatureCard1 } from './why/sections'

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
                <div className='flex-[1.7] w-full h-80 rounded-3xl border border-[#131313] bg-gradient-to-tr from-[#dfd5ff07] flex flex-col p-5 px-6 overflow-hidden relative group'>
                    <div className='space-y-2'>
                        <p className=' font-medium text-sm text-muted-foreground'>Tell your story</p>
                        <h1 className='font-semibold text-3xl leading-snug bg-gradient-to-tr from-[#c7bedf] to-[#beaeeb] bg-clip-text text-transparent'>Captivate with simplistic portfolio but packed with details</h1>
                        <div className=' absolute translate-y-8 z-[2] group-hover:-translate-y-4 transition duration-700 group-hover:-rotate-6'>
                            <AppearanceShowcaseCard1 />
                        </div>
                        <div className=' absolute translate-y-8 right-0 z-[1] group-hover:-translate-y-0 group-hover:rotate-6 transition duration-700 delay-100'>
                            <AppearanceShowcaseCard4 />
                        </div>
                    </div>
                    
                </div>
                <div className='flex-[1] w-full h-80 rounded-3xl border border-[#131313] bg-gradient-to-tr from-[#ffffff07] flex flex-col p-5 px-6 overflow-hidden relative group'>
                    <div className='space-y-2'>
                        <p className=' font-medium text-sm text-muted-foreground'>Customizable</p>
                        <h1 className='font-semibold text-3xl leading-snug bg-gradient-to-tr from-[#c7bedf] to-[#beaeeb] bg-clip-text text-transparent'>With 100+ themes to select from <span className='text-lg'>or make your own</span></h1>
                        <div className=' absolute translate-y-8 z-[2] left-1/2  -translate-x-1/2 group-hover:translate-y-6 transition duration-700'>
                            <AppearanceShowcaseCard3 />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-4'>
                <div className='flex-[1] w-full h-80 rounded-3xl border border-[#131313] bg-gradient-to-tr from-[#ffffff07] flex flex-col p-5 px-6 overflow-hidden relative group items-center'>
                    <div className=' flex flex-col justify-center h-full'>
                        <p className='absolute top-5 left-6 font-medium text-sm text-muted-foreground'>Innovation</p>
                        
                        <span className='font-semibold text-center  text-4xl leading-snug bg-gradient-to-tr from-[#c7bedf] to-[#beaeeb] bg-clip-text text-transparent'>Revolutionizing</span>
                        <span className=' font-semibold text-center  text-4xl leading-snug bg-gradient-to-tr from-[#c7bedf] to-[#beaeeb] bg-clip-text text-transparent'>portfolios</span>
                    </div>
                    <div className='absolute bottom-0 left-1/2  transition delay-100 translate-x-[-50%] z-[2] translate-y-[90%]'>
                        <AppearanceShowcaseCard2 />
                    </div>
                </div>
                <div className='flex-[1.7] w-full h-80 rounded-3xl border border-[#131313] bg-gradient-to-tr from-[#dfd5ff07] flex flex-col p-5 px-6 overflow-hidden relative group justify-end'>
                    <div className='space-y-2'>
                        <div className=' absolute top-1/2 left-1/2 z-[-1] -translate-x-1/2 -translate-y-[100%]  transition duration-700 delay-100'>
                            <FeatureCard1 />
                        </div>
                        <h1 className='font-semibold text-3xl leading-snug bg-gradient-to-tr from-[#c7bedf] to-[#beaeeb] bg-clip-text text-transparent'>Showcase all you want, Ezfolio makes it easy to manage your portfolio</h1>
                        <p className='top-5 left-6 font-medium text-sm text-muted-foreground'>Features</p>
                        
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
  )
}

export default Features