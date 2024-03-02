import React from 'react'

const AboutMe = () => {
  return (
    <div className='w-full max-w-screen-lg mx-auto flex items-center flex-col justify-center'>
        <div className='space-y-1 text-center'>
            <h2 className='text-2xl font-bold'>Meet the Developer</h2>
            <p className='text-sm font-medium text-muted-foreground'>An about me section of what I do 😉</p>
        </div>

        <div className='flex w-full h-full'>
            <div className='w-1/2 flex flex-col items-start space-y-4'>
                <h3 className='text-lg font-semibold'>Who am I?</h3>
                <p className='text-sm font-medium text-muted-foreground'>I am a passionate developer who loves to build and contribute to open source projects. I am a full stack developer with a focus on front end development. I am currently working as a freelance developer and I am open to new opportunities.</p>
            </div>
            <div className='w-1/2 flex flex-col items-start space-y-4'>
                <h3 className='text-lg font-semibold'>What do I do?</h3>
                <p className='text-sm font-medium text-muted-foreground'>I am a passionate developer who loves to build and contribute to open source projects. I am a full stack developer with a focus on front end development. I am currently working as a freelance developer and I am open to new opportunities.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe