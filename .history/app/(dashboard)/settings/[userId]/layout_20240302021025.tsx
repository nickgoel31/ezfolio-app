import React from 'react'

const SettingsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='max-w-screen-lg'>
        <div className=''>

        </div>
        <div>
            {children}
        </div>
    </body>
  )
}

export default SettingsLayout