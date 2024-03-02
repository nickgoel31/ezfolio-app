import { AlignRight, Eye, Shapes } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const MobileBottomBar = ({userId,username}:{userId:string,username:string}) => {
  return (
    <div className='w-full h-full grid grid-cols-4 gap-2 items-center justify-center px-3'>
        <Link href={`/d/${userId}`} className='flex flex-col space-y-1 items-center justify-center hover:bg-foreground/10 w-full h-full font-medium text-xs p-1'>
            <AlignRight size={17} />
            <p>Info</p>
        </Link>
        <div className='flex flex-col space-y-1 items-center justify-center hover:bg-foreground/10 w-full h-full font-medium text-xs p-1'>
            <Shapes size={17} />
            <p>Appearance</p>
        </div>
        <div className='flex flex-col space-y-1 items-center justify-center hover:bg-foreground/10 w-full h-full font-medium text-xs p-1'>
            <Eye size={17} />
            <p>Preview</p>
        </div>
        <div className='flex flex-col space-y-1 items-center justify-center hover:bg-foreground/10 w-full h-full font-medium text-xs p-1'>
            {/* <AlignRight size={17} />
            <p>Info</p> */}
        </div>
    </div>
  )
}

export default MobileBottomBar