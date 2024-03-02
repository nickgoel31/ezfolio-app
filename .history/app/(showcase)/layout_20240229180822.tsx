import React from 'react'

const ShowcaseLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='h-full w-full relative'>
        <div className='absolute top-0 left-0 w-full p-3'>

        </div>
        {children}
    </div>
  )
}

export default ShowcaseLayout