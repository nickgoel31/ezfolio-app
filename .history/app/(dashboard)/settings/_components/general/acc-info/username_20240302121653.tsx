import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Edit } from 'lucide-react'
import React from 'react'

const UsernameComponent = ({username}:{username:string}) => {
  return (
    <div className='space-y-2'>
        <div>
            <h4 className='text-base font-bold'>Username</h4>
            <p className='text-sm font-medium text-muted-foreground'>Your username is a unique identifier</p>
        </div>
        <div className='items-center space-y-1'>
            <Input className='w-80' value={`@${username}`}/>
            <p className='text-muted-foreground font-medium text-xs'>Username can't be changed.</p>
            
            {/* <Dialog>
                <DialogTrigger>
                    <Button variant={"outline"} size="icon">
                        <Edit size={15} className='text-muted-foreground'/>
                    </Button>
                </DialogTrigger>

                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>
                            Change Name
                        </DialogTitle>
                        <DialogDescription>
                            Change your name to something else.
                        </DialogDescription>
                    </DialogHeader>

                    <Input className='' defaultValue={username} />
                </DialogContent>
            </Dialog> */}
        </div>
    </div>
  )
}

export default UsernameComponent