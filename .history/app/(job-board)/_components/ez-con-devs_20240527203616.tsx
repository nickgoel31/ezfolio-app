import { getAllUserPage } from '@/helpers/get-user'
import React from 'react'

const EzConnectDevs = async () => {

    const userPages = await getAllUserPage()
    if(!userPages){
        return 
    }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>

    </div>
  )
}

export default EzConnectDevs