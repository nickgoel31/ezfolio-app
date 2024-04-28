import { settingsNavbarItems } from '@/data/settings'
import React from 'react'

const SettingsSidebar = () => {
  return (
      <ul>
        {settingsNavbarItems.map((item,index) => (
            <li key={index} className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">{item}</li>
        ))}
        
        <li className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700">Accounts</li>
      </ul>
  )
}

export default SettingsSidebar