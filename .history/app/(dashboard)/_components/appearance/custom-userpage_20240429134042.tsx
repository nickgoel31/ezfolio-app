"use client"

import { Switch } from "@/components/ui/switch"
import { useState } from "react"

interface Props{
    userPageId:string,
    isCustomThemeEnabled: boolean,
    
}

const CustomUserpageTheme = ({userPageId,isCustomThemeEnabled}:Props) => {
    const [isCustomThemeEnabledState,setIsCustomThemeEnabledState] = useState(isCustomThemeEnabled)
  return (
    <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-2'>
        <div className='flex items-center w-full justify-between'>
            <div className='flex items-center w-full gap-3'>
                <h4 className='text-lg font-medium'>Custom Theme</h4>
                <p className='bg-foreground text-background rounded-sm px-1 font-bold text-sm'>ALPHA</p>
            </div>

            <Switch checked={isCustomThemeEnabledState}/>
        </div>

        {!isCustomThemeEnabledState && <p className='text-xs font-medium text-yellow-500 pt-2'>
            Custom theme feature is currently in closed beta. It will be available soon.
        </p>}

        <div className='flex flex-col spacer'>
            <h4>
                Theme Editor
            </h4>
        </div>
    </div>
  )
}

export default CustomUserpageTheme