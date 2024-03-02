import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'

const NoUserPageFound = ({userName}:{userName:string}) => {
    if(!userName) redirect("/")
  return (
    <div className='w-full h-full flex flex-col items-center justify-center space-y-2'>
        <h2 className='font-bold text-4xl'>No Page found!</h2>
        <p>Do you want to claim this page? <Link href={`/create?username=${userName}`} className='underline underline-offset-2'>Click here</Link></p>
    </div>
  )
}

export default NoUserPageFound