import React from 'react'

const WhatIsApp = () => {
  return (
    <div className='hidden lg:flex w-full flex-col items-center space-y-7'>
        <div className='text-center space-y-1'>
            <h2 className='font-bold text-4xl'>How does Ezfolio work?</h2>
            <p className='text-sm text-muted-foreground font-medium'>
                Why should one create an ezfolio profile?
            </p>
        </div>

        <div className='flex flex-col w-full max-w-screen-lg h-[200vh] items-start justify-start'>
            <div className='w-full  flex items-center justify-center gap-16 p-2 sticky top-[var(--navbar-height)] z-[4]'>
                <div className='w-12 h-12 flex items-center justify-center rounded-full bg-background border'>1</div>

                <div className='w-12 h-12 flex items-center justify-center rounded-full bg-background border'>2</div>

                <div className='w-12 h-12 flex items-center justify-center rounded-full bg-background border'>3</div>
                
            </div>

            <div className='w-full flex items-center '>
                <div className='w-1/2'>
                    <h3 className='font-bold text-2xl'>Create a profile</h3>
                    <p className='text-sm text-muted-foreground font-medium'>
                        Why should one create an ezfolio profile?
                    </p>
                </div>

                <div className='border rounded-xl bg-gradient-to-tr from-violet-950/40 w-1/2 p-5 px-6 sticky'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatIsApp