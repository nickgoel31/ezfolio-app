import React from 'react'

const AnalyticsBox = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 space-x-4'>
         <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-3 relative'>
            <div className='flex items-center justify-between w-full'>
                <h4 className='text-sm font-medium'>Visitors</h4>
            </div>

            <div className='flex flex-col items-start gap-3'>
                <h1 className='text-4xl font-bold'>30</h1>
                <div className='text-xs font-medium rounded-md bg-foreground text-background p-0.5 px-1.5'>
                    +0%
                </div>

                <div className='absolute bottom-3 right-3 rounded-full p-1 bg-'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AnalyticsBox