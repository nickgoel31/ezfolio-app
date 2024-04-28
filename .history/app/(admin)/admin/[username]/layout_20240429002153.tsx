import React from 'react'

const AdminLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body>
        <div>{children}</div>
    </div>
  )
}

export default AdminLayout