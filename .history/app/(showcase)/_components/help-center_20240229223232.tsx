import { BookOpenIcon } from 'lucide-react'
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
            <div className='border shadow-sm rounded-xl p-6 px-8 space-y-1 flex flex-col items-start shadow-md bg-gradient-to-tr from-violet-950/40'>
                <div className='text-muted-foreground flex justify-center p-2 rounded-full bg-foreground/5 items-center'>
                    <BookOpenIcon size={25} />
                </div>
                <h4 className='text-xl font-semibold'>Documentation</h4>
                <p className='text-sm font-medium text-muted-foreground'>Documents describe how things should be done. They have a version history and they require a proper review process when updated.</p>
            </div>
        </div>
    </div>
  )
}

export default HelpCenter