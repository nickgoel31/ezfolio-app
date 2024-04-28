import React from 'react'
import SettingsSidebar from '../../_components/sidebar'

const SettingsLayout = ({params, children}:{children:React.ReactNode, params: {userId:string}}) => {
  return (
    <div className='px-4 h-screen w-full bg-background text-foreground '>
        <div className="h-full max-w-screen-lg mx-auto pb-16">
            <div>
              <h1 className=" text-4xl font-semibold">Settings</h1>
            </div>
            {children}
        </div>
    </div>
  )
}

export default SettingsLayout