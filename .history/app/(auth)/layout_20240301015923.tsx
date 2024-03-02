import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='relative overflow-hidden'>
        {/* <div className='absolute h-96 w-96 rounded-full bg-violet-500/20 blur-3xl -top-20 -right-20' />
        <div className='absolute h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl -bottom-20 -left-20' /> */}

<div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#f0f0f005_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f005_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF15,transparent)]"></div></div>

        {children}
    </body>
  )
}

export default AuthLayout