"use client"

import { Switch } from "@/components/ui/switch"

interface Props{
    userPageId:string,
    isCustomThemeEnabled: boolean,
    
}

const CustomUserpageTheme = ({userPageId,isCustomThemeEnabled}:Props) => {
  return (
    <div className='border shadow-sm rounded-xl p-5 bg-background w-full space-y-2'>
        <div className='flex items-center w-full justify-between'>
            <div className='flex items-center w-full gap-3'>
                <h4 className='text-lg font-medium'>Custom Theme</h4>
                <p className='bg-foreground text-background rounded-sm px-1 font-bold text-sm'>ALPHA</p>
            </div>

            <Switch checked={isCu}/>
        </div>
    </div>
  )
}

export default CustomUserpageTheme