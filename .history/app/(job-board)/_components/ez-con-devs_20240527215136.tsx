import { getAllUserPage } from '@/helpers/get-user'
import React from 'react'

const EzConnectDevs = async () => {

    const userPages = await getAllUserPage()
    if(!userPages){
        return <div>Loading...</div>
    }

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {userPages.map((user,index) => (
            <div key={index} className='w-full bg-foreground/[0.02] rounded-lg border border-foreground/5 h-48 p-4 items-center justify-center'>
                <div className='w-full h-full items-center justify-center'>

                </div>
            </div>
        ))}
    </div>
  )
}

export default EzConnectDevs