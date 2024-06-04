import Tiptap from '@/components/tiptap'
import { useEditor } from '@tiptap/react'
import React from 'react'

const CreateQuestionPage = () => {

    const editor = useEditor()

  return (
    <div className='w-full h-full px-6'>

        <div className='space-y-14 lg:px-24'>
            <div className='flex items-center justify-between w-full'>
                <div className='flex flex-col'>
                    <h1 className='text-4xl font-bold leading-normal'>Ask a question</h1>
                    <p className='text-muted-foreground text-sm font-medium'>
                        Make sure your question is not already answered and is unique
                    </p>
                </div>
            </div>

            <Tiptap />
        </div>

        <div className='pb-16'>
      
        </div>
    </div>
  )
}

export default CreateQuestionPage