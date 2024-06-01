import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const QuestionsPage = () => {
  return (
    <div className='w-full h-full px-6'>

      <div className='space-y-14 lg:px-24'>
        <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col'>
                <h1 className='text-4xl font-bold leading-normal'>Questions</h1>
                <p className='text-muted-foreground text-sm font-medium'>
                    Ask questions to developers and get answers. 
                </p>
            </div>

            <div className='relativeflex items-center gap-2'>
                <div>
                    <Input placeholder='Search your question'/>
                </div>
                <div>
                    <Search />
                </div>
            </div>
        </div>

        <div className=''>

        </div>
      </div>
      <div className='pb-16'>
      
      </div>
    </div>
  )
}

export default QuestionsPage