import React from 'react'

const AnalyticsBox = () => {
  return (
    <div className='grid grid-cols-1 xl:grid-cols-4'>
         <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-2'>
            <div className='flex items-center justify-between w-full'>
                <h4 className='text-lg font-medium'>Analytics</h4>
            </div>
        </div>
    </div>
  )
}

export default AnalyticsBox