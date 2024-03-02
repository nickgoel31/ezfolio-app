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

        <div className='flex w-full max-w-screen-xl '>
            <div className='w-full bg-red-500 flex items-center justify-center p-2'>
                <div className='p-4 rounded-full bg-background border'>1</div>
                <div>2</div>
                <div>3</div>
            </div>
        </div>
    </div>
  )
}

export default WhatIsApp