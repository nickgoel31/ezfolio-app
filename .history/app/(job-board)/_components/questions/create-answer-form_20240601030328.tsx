import Tiptap from '@/components/tiptap'
import React from 'react'

const CreateNewAnswer = () => {
  return (
    <div>
        <h3 className='font-medium text-lg'>Have an answer to this question?</h3>

        <Tiptap description='' onChange={field.onChange}/>
    </div>
  )
}

export default CreateNewAnswer