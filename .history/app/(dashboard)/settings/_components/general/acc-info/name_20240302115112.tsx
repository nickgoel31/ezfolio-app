import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Edit } from 'lucide-react'
import React from 'react'

const NameComponent = () => {
  return (
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
  )
}

export default NameComponent