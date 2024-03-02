import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='relative h-full w-full bg-background overflow-hidden'>
        {/* <div className='absolute h-96 w-96 rounded-full bg-violet-500/20 blur-3xl -top-20 -right-20' />
        <div className='absolute h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl -bottom-20 -left-20' /> */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

        {children}
    </body>
  )
}

export default AuthLayout