import { Avatar } from '@/components/ui/avatar'
import React from 'react'

const UserSuggestionsForUser = () => {
  return (
    <div className='w-full justify-between items-start relative'>
        <h4 className='font-semibold text-lg'>Suggested</h4>

        <div>
            <div key={index} className='w-full bg-foreground/[0.02] relative overflow-hidden rounded-lg border border-foreground/5 h-96 p-4 py-6 gap-3 flex flex-col items-center'>
                        <Avatar className='h-16 w-16'>
                            <AvatarFallback>{user.title.charAt(0)}</AvatarFallback>
                            {user.pagePicUrl && <AvatarImage src={user.pagePicUrl}/>}
                        </Avatar>
                        <div className='text-center'>
                            <h1 className='font-medium text-lg'>
                                {user.title}
                            </h1>
                            <p className='text-xs text-muted-foreground'>
                                @{user.username}
                            </p>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default UserSuggestionsForUser