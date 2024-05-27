import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getAllUserPage } from '@/helpers/get-user'
import Image from 'next/image'
import React from 'react'

const EzConnectDevs = async () => {

    const userPages = await getAllUserPage()
    if(!userPages){
        return <div>Loading...</div>
    }

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {userPages.slice(0,20).map((user,index) => (
            <div key={index} className='w-full bg-foreground/[0.02] rounded-lg border border-foreground/5 h-80 p-4 py-6 gap-3 flex flex-col items-center'>
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

                <div className='w-full gap-2 flex flex-col text-sm font-medium pt-2'>
                    <h2>Skills</h2>
                    <div>
                        {user.skills.slice(0,3).map((skill,index) => (
                            <span key={index} className='bg-foreground/5 px-2 py-1 rounded-lg'>
                                {skill}
                            </span>
                        ))}
                        {user.skills.length <>> 3 && (
                            <p>+3</p>
                        )}
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default EzConnectDevs