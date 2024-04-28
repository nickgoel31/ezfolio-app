import React from 'react'

const SettingsLayout = ({params, children}:{children:React.ReactNode, params: {userId:string}}) => {
  return (
    <div className='bg-white'>
        {children}</div>
  )
}

export default SettingsLayout