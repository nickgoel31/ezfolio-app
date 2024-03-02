import { AlignRight, Eye, Shapes } from 'lucide-react'
import React from 'react'

const MobileBottomBar = () => {
  return (
    <div className='w-full h-full grid grid-cols-4 gap-2 items-center justify-center px-3'>
        <div className='flex flex-col space-y-1 items-center justify-center bg-foreground/10 w-full h-full rounded font-medium text-xs p-1'>
            <AlignRight size={17} />
            <p>Info</p>
        </div>
        <div className='flex flex-col space-y-1 items-center justify-center bg-foreground/10 w-full h-full rounded font-medium text-xs p-1'>
            <Shapes size={17} />
            <p>Appearance</p>
        </div>
        <div className='flex flex-col space-y-1 items-center justify-center bg-foreground/10 w-full h-full rounded font-medium text-xs p-1'>
            <Eye size={17} />
            <p>Preview</p>
        </div>
        <div className='flex flex-col space-y-1 items-center justify-center bg-foreground/10 w-full h-full rounded font-medium text-xs p-1'>
            {/* <AlignRight size={17} />
            <p>Info</p> */}
        </div>
    </div>
  )
}

export default MobileBottomBar