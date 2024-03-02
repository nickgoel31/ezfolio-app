import React from 'react'

const TwoFAuth = () => {
  return (
    <div className='flex justify-between items-center'>
        <div>
            <h3 className='text-lg font-bold'>Two-Factor Authentication</h3>
            <p className='text-sm font-medium text-muted-foreground'>Enable or disable two-factor authentication.</p>
        </div>
        <button className='text-sm font-medium text-blue-600'>Enable</button>
    </div>
  )
}

export default TwoFAuth