import Link from 'next/link'
import React from 'react'

const SettingsNavbar = () => {
  return (
    <div className='w-full items-center flex justify-start gap-3'>
        <Link href={`/settings`}>
            Basic
        </Link>
    </div>  
  )
}

export default SettingsNavbar