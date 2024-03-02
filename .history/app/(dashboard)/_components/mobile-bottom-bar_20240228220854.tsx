import { AlignRight } from 'lucide-react'
import React from 'react'

const MobileBottomBar = () => {
  return (
    <div className='w-full h-full grid grid-cols-4 gap-2 items-center justify-center '>
        <div className='flex flex-col space-y-1 items-center justify-center bg-foreground/10 w-full h-full rounded font-medium text-xs p-1'>
            <AlignRight size={17} />
            <p>Info</p>
        </div>
    </div>
  )
}

export default MobileBottomBar