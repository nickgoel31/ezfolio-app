import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Edit } from 'lucide-react'
import React from 'react'

const AccountInformation = () => {
  return (
    <div className='space-y-3 pl-3'>
        <div className=''>
            <h3 className='text-lg font-bold'>Account Information</h3>
            <p className='text-sm font-medium text-muted-foreground'>Update your account information and email address.</p>
        </div>

        <div className='space-y-4 pl-6'>
            <div className='space-y-2'>
                <div>
                    <h4 className='text-base font-bold'>Name</h4>
                    <p className='text-sm font-medium text-muted-foreground'>Your name is how people know you on the platform.</p>
                </div>
                <div className='flex items-center gap-3'>
                    <Input className='w-80' value={"Harsh Goel"}/>
                    <Button variant={"outline"} size="icon">
                        <Edit size={15} className='text-muted-foreground'/>
                    </Button>
                </div>
            </div>
            <div className='space-y-2'>
                <div>
                    <h4 className='text-base font-bold'>Username</h4>
                    <p className='text-sm font-medium text-muted-foreground'>Your username is visible to everyone on the platform.</p> 
                </div>
                <div className='flex items-center gap-3'>
                    <Input className='w-80' value={"@harshgoel"} disabled/>
                    {/* <Button variant={"outline"} size="icon">
                        <Edit size={15} className='text-muted-foreground'/>
                    </Button> */}
                </div>
            </div>
            <div className='space-y-2'>
                <div>
                    <h4 className='text-base font-bold'>Email</h4>
                    <p className='text-sm font-medium text-muted-foreground'>Your email is used for account recovery and fetching.</p>
                </div>
                <div className='flex items-center gap-3'>
                    <Input className='w-80' value={"harshgoel2004@gmail.com"}/>
                    <Button variant={"outline"} size="icon">
                        <Edit size={15} className='text-muted-foreground'/>
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountInformation