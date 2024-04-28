import { settingsNavbarItems } from '@/data/settings'
import Link from 'next/link'
import React from 'react'

const SettingsSidebar = () => {
  return (
      <ul className='flex flex-col'>
        {settingsNavbarItems.map((item,index) => (
            <Link href={item.path} key={index} className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">{item.label}</Link>
        ))}
        
        <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">Accounts</li>
      </ul>
  )
}

export default SettingsSidebar