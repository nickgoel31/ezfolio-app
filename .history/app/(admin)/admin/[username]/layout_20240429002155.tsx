import React from 'react'

const AdminLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body>
        <div>{children}</div>
    </body>
  )
}

export default AdminLayout