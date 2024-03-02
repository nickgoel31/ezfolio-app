import React from 'react'

const TwoFAuth = () => {
  return (
    <div className='space-y-3'>
        <div className='flex justify-between items-center'>
            <div>
                <h3 className='text-lg font-bold'>Two-Factor Authentication</h3>
                <p className='text-sm font-medium text-muted-foreground'>Enable or disable two-factor authentication.</p>
            </div>
            <button className='text-sm font-medium text-blue-600'>Enable</button>
        </div>
        <p>Two Factor authentication is not enabled! It can pose a risk to your account safety and integrity</p>
    </div>
  )
}

export default TwoFAuth