import React from 'react'

const CreateFormImageUpload = () => {
  return (
    <div className='w-full p-2 flex items-center justify-center'>
        <div className='h-20 w-20 bg-foreground/10 rounded-full overflow-hidden flex items-center justify-center group'>
            <span className='bg-black/10 w-full h-full rounded-full absolute'>+</span>
            <p className='text-xs font-medium'>Upload</p>
        </div>
    </div>
  )
}

export default CreateFormImageUpload