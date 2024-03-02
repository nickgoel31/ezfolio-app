import React from 'react'

const HelpCenter = () => {
  return (
    <div className='w-full flex flex-col items-center space-y-7'>
        <div className='text-center space-y-1'>
            <h2 className='font-bold text-4xl'>Help Center</h2>
            <p className='text-sm text-muted-foreground font-medium'>
                Get help with Ezfolio account, products and services.
            </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg w-full items-center gap-6'>
            <div className='border shadow-sm rounded-xl p-4'>
                <h4 className='text-2xl font-semibold'>Documentation</h4>
            </div>
        </div>
    </div>
  )
}

export default HelpCenter