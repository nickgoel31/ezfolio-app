import React from 'react'

const AdminLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <div>{children}</div>
    </div>
  )
}

export default AdminLayout