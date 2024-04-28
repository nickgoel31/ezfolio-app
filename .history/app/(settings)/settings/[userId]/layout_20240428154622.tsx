import React from 'react'
import SettingsSidebar from '../../_components/sidebar'

const SettingsLayout = ({params, children}:{children:React.ReactNode, params: {userId:string}}) => {
  return (
    <div className='bg-white text-black'>
        <SettingsSidebar />
        {children}
    </div>
  )
}

export default SettingsLayout