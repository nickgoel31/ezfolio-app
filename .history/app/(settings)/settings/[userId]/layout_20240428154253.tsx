import React from 'react'

const SettingsLayout = ({params, children}:{children:React.ReactNode, params: {userId:string}}) => {
  return (
    <div>{children}</div>
  )
}

export default SettingsLayout