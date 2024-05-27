import React from 'react'

const JobBoardNavbar = () => {
  return (
    <div className='border-b border-opacity-10 p-3 px-48'>
        <h1 className='text-2xl font-bold'>Ezfolio</h1>
        <div className='flex'>
            <div className='mr-4'>
            <a href='/job-board/find'>Find a Job</a>
            </div>
            <div>
            <a href='/job-board/post'>Post a Job</a>
            </div>
        </div>
    </div>
  )
}

export default JobBoardNavbar