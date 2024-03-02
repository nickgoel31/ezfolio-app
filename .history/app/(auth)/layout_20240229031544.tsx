import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body>
        {children}
    </body>
  )
}

export default AuthLayout