import React from 'react'

const SettingsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='max-w-screen-md mx-auto px-6 py-14'>
        <div className=''>

        </div>
        <div>
            {children}
        </div>
    </body>
  )
}

export default SettingsLayout