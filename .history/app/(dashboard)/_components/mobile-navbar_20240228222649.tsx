import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import UserButton from '@/components/user-btn'
import { BugIcon, MoreVertical } from 'lucide-react'
import Link from 'next/link'
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
                    <Link href={"mailto:harshgoel2004@gmail.com"} className='flex items-center gap-1 w-full text-sm font-medium rounded '>
                        <BugIcon size={17}/>
                        Report a bug?
                    </Link>
                </div>
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default MobileNavbar