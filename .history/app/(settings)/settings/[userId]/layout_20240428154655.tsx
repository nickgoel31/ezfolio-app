import React from 'react'
import SettingsSidebar from '../../_components/sidebar'

const SettingsLayout = ({params, children}:{children:React.ReactNode, params: {userId:string}}) => {
  return (
    <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto">
  <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
    <div className='bg-white text-black grid grid-cols-8 pt-3 sm:grid-cols-10'>
        <div className='col-span-2 hidden sm:block'>

        </div>
        <SettingsSidebar />
        {children}
    </div>
  )
}

export default SettingsLayout