import React from 'react'

const GetStartedBtnNavbar = () => {
  return (
    <>
    {user ? (
                    <Link href={"/d/redirect"} className='p-2 px-4 rounded-full text-xs font-medium bg-gradient-to-t from-violet-300/60 dark:from-violet-950 '>
                        Dashboard
                    </Link>
                ):(
                    <Link href={"/login"} className='p-2 px-4 rounded-full text-xs font-medium bg-gradient-to-t from-violet-300/60 dark:from-violet-950 '>
                    Get started
                    </Link>
                )}
    </>
  )
}

export default GetStartedBtnNavbar