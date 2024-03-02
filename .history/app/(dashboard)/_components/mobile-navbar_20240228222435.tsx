import { Popover, PopoverTrigger } from '@/components/ui/popover'
import UserButton from '@/components/user-btn'
import { MoreVertical } from 'lucide-react'
import React from 'react'

const MobileNavbar = ({username}:{username:string}) => {
  return (
    <div className='flex items-center gap-3'>
        <UserButton username={username} />

        <Popover>
            <PopoverTrigger>
                <MoreVertical size={17}/>
            </PopoverTrigger>
        </Popover>
    </div>
  )
}

export default MobileNavbar