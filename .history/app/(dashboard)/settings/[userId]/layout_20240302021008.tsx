import React from 'react'

const SettingsLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body>
        <div>
            {children}
        </div>
    </body>
  )
}

export default SettingsLayout