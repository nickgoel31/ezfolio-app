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
            <div key={index} className='w-full bg-foreground/[0.02] rounded-lg border border-foreground/5 h-56 p-4 flex flex-col '>
                <Avatar className='h-16 w-16'>
                    <AvatarFallback>{user.title.charAt(0)}</AvatarFallback>
                    {user.pagePicUrl && <AvatarImage src={user.pagePicUrl}/>}
                </Avatar>
                <div className=''>
                    {user.title}
                </div>
            </div>
        ))}
    </div>
  )
}

export default EzConnectDevs