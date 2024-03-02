import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import UserButton from '@/components/user-btn'
import { MoreVertical } from 'lucide-react'
import React from 'react'

const MobileNavbar = ({username}:{username:string}) => {
  return (
    <div className='flex items-center gap-3'>
        <UserButton username={username} />

        <Popover>
            <PopoverTrigger >
                <MoreVertical size={17}/>
            </PopoverTrigger>

            <PopoverContent>
                <div className='w-full h-full p-3 flex flex-col items-center gap-1'>

                </div>
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default MobileNavbar