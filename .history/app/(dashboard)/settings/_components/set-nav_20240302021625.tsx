import Link from 'next/link'
import React from 'react'

const SettingsNavbar = () => {
  return (
    <div className='w-full items-center flex justify-start gap-3 text-sm font-medium'>
        <Link href={`/settings`}>
            Basic
        </Link>
        <Link href={`/settings`}>
            Basic
        </Link>
        <Link href={`/settings`}>
            Basic
        </Link>
    </div>  
  )
}

export default SettingsNavbar