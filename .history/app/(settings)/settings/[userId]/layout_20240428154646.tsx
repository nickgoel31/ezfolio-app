import React from 'react'
import SettingsSidebar from '../../_components/sidebar'

const SettingsLayout = ({params, children}:{children:React.ReactNode, params: {userId:string}}) => {
  return (
    <div className='bg-white text-black grid grid-cols-8 pt-3 sm:grid-cols-10'>
        <div className='col-span-2 hidden sm:block'>

        </div>
        <SettingsSidebar />
        {children}
    </div>
  )
}

export default SettingsLayout