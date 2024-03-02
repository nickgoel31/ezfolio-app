import React from 'react'

const SettingsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='max-w-screen-lg mx-auto px-6'>
        <div className=''>

        </div>
        <div>
            {children}
        </div>
    </body>
  )
}

export default SettingsLayout