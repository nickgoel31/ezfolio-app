import { settingsNavbarItems } from '@/data/settings'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SettingsNavbar = () => {
    const pathname = usePathname()

    const isCurrentPage = (path: string) => {
        return pathname === path || pathname.endsWith(path);
    }

    return (
        <div className='w-full items-center flex justify-start gap-6 text-sm font-medium text-muted-foreground'>
            {settingsNavbarItems.map((item, index) => (
                <Link key={index} href={item.path} className={cn(isCurrentPage(item.path) && 'underline underline-offset-4', item.label === "Danger" && 'text-red-600')}>
                    
                        {item.label}
                    
                </Link>
            ))}
        </div>  
    )
}

export default SettingsNavbar
