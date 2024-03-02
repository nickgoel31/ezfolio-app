import Image from 'next/image'
import React from 'react'

const CreatePageLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <body className='flex items-center justify-center relative lg:flex-row '>
        <div className='z-[3] p-14 flex-[2.3] flex flex-col items-center justify-center h-full'>
            {children}
        </div>

        <div className='hidden lg:block h-full w-full flex-[1]'>
            <Image src={"/create-bg.jpg"} alt='Create Background' width={1000} height={1000} className='h-full w-full object-cover'/>
        </div>
    </body>
  )
}

export default CreatePageLayout