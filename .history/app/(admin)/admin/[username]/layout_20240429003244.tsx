import React from 'react'
import AdminSidebar from '../../_components/sidebar'

const AdminLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='w-full h-full'>
        <div>
            <AdminSidebar />
        </div>
        <div className='min-h-screen antialiased bg-background text-foreground'>
            <div className='w-full min-h-screen bg-foreground/[0.05]'>
                {children}
            </div>
        </div>
    </body>
  )
}

export default AdminLayout