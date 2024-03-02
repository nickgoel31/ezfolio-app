import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <body className='relative h-full w-full bg-slate-950 overflow-hidden'>
        {/* <div className='absolute h-96 w-96 rounded-full bg-violet-500/20 blur-3xl -top-20 -right-20' />
        <div className='absolute h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl -bottom-20 -left-20' /> */}

    <div className=""><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>

        {children}
    </body>
  )
}

export default AuthLayout