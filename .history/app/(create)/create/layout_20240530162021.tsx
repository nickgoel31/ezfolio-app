import Image from 'next/image'
import React from 'react'

const CreatePageLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <body className='flex items-center justify-center relative lg:flex-row '>
      <div className="absolute bottom-0 z-[-10] left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="hidden dark:block absolute top-0 z-[-2] h-screen w-screen rotate-180 transform  bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,#7C3AED15_100%)]"></div>
        <div className='z-[3] p-6 flex-[2.3] flex flex-col items-center justify-center h-full'>
            {children}
        </div>

        {/* <div className='hidden lg:block h-full w-full flex-[1]'>
            <Image src={"/create-bg.jpg"} alt='Create Background' width={1000} height={1000} className='h-full w-full object-cover'/>
        </div> */}
    </body>
  )
}

export default CreatePageLayout