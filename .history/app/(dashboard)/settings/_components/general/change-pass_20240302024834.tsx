import React from 'react'

const ChangePassword = () => {
  return (
    <div className='flex justify-between items-center'>
        <div>
            <h3 className='text-lg font-bold'>Password</h3>
            <p className='text-sm font-medium text-muted-foreground'>Manage your password.</p>
            <Input className='mt-2' value={"harshgoel2004@gmail.com"}/>
        </div>
        
    </div>
  )
}

export default ChangePassword