import React from 'react'
import SettingsSidebar from '../../_components/sidebar'

const SettingsLayout = ({params, children}:{children:React.ReactNode, params: {userId:string}}) => {
  return (
    <div className='mx-0 px-4 min-h-screen w-full bg-background text-foreground'>
        <div className="h-full  max-w-screen-lg mx-auto">
            <h1 className="border-b border-foreground/20 py-6 text-4xl font-semibold">Settings</h1>
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