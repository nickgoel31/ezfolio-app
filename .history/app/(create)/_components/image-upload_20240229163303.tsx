import React from 'react'

const CreateFormImageUpload = () => {
  return (
    <div className='w-full p-2 flex items-center justify-center'>
        <div className='h-20 w-20 bg-foreground/10 rounded-full overflow-hidden flex items-center justify-center group relative cursor-pointer'>
            <span className='bg-black/40 w-full h-full rounded-full absolute group-hover:flex hidden items-center justify-center '>+
            </span>
            <p className='text-xs font-medium group-hover:hidden'>Upload</p>
        </div>
    </div>
  )
}

export default CreateFormImageUpload