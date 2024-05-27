import { getAllUserPage } from '@/helpers/get-user'
import React from 'react'

const EzConnectDevs = async () => {

    const userPages = await getAllUserPage()
    if(!userPages){
        return <div>Loading...</div>
    }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {userPages.map((user,index) => (
            <div>Hello</div>
        ))}
    </div>
  )
}

export default EzConnectDevs