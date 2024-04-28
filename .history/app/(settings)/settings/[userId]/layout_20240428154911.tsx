import React from 'react'
import SettingsSidebar from '../../_components/sidebar'

const SettingsLayout = ({params, children}:{children:React.ReactNode, params: {userId:string}}) => {
  return (
    <div>
        <div className="mx-0 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto bg-white text-black">
            <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
            <div className='grid grid-cols-8 pt-3 sm:grid-cols-10'>
                <div className='col-span-2 hidden sm:block'>
                    <SettingsSidebar />
                </div>
                <div className='col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow'>
                    {children}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SettingsLayout