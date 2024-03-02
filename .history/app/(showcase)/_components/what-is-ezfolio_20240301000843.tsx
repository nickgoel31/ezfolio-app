import React from 'react'

const WhatIsApp = () => {
  return (
    <div className='hidden lg:flex w-full flex-col items-center space-y-7'>
        <div className='text-center space-y-1'>
            <h2 className='font-bold text-4xl'>How does Ezfolio work?</h2>
            <p className='text-sm text-muted-foreground font-medium'>
                With Ezfolio, presenting your developer profile has never been easier.
            </p>
        </div>

        <div className='flex flex-col w-full max-w-screen-lg relative items-start justify-start space-y-8'>
            <div className='w-full  flex items-center justify-center gap-16 p-2  z-[4]'>
                <div className='w-12 h-12 flex items-center justify-center rounded-full bg-background border'>1</div>

                <div className='w-12 h-12 flex items-center justify-center rounded-full bg-background border'>2</div>

                <div className='w-12 h-12 flex items-center justify-center rounded-full bg-background border'>3</div>
                
            </div>

            <div className='w-full gap-7 flex  relative'>
                <div className='w-full border border-foreground/10 rounded-xl bg-gradient-to-tr h-[70vh] from-violet-950/40 p-7 px-7'>
                    

                    {/* <div className='space-y-2'>
                        <h3 className='font-bold text-2xl'>Showcase Your Work and Experiences</h3>
                        <p className='text-sm text-muted-foreground font-medium'>
                        Once your userpage is set up, it's time to start filling it with content that truly represents your professional journey and capabilities. Begin by uploading your projects, each accompanied by detailed descriptions and eye-catching images that effectively showcase your skills and creativity to visitors. Additionally, share insights into your professional journey by adding experiences, including past roles, responsibilities, and notable achievements. This allows others to gain a deeper understanding of your background and expertise. Finally, make sure to highlight your skills and proficiency by listing both your technical abilities and soft skills. Whether it's programming languages, development tools, or effective communication and teamwork, showcasing your diverse skill set is essential for making a compelling impression on potential collaborators, clients, or employers..
                        </p>
                    </div>

                    <div className='space-y-2'>
                        <h3 className='font-bold text-2xl'>Share and Connect</h3>
                        <p className='text-sm text-muted-foreground font-medium'>
                        Ezfolio offers seamless integration of your social links, enhancing your online presence and expanding your networking opportunities effortlessly. Whether it's your GitHub profile, LinkedIn page, or personal website, connecting your social accounts allows visitors to explore more about you beyond your Ezfolio page. Once you've put the finishing touches on your Ezfolio, sharing it with your network is a breeze. With just a few clicks, you can distribute your portfolio to friends, colleagues, and potential employers, ensuring that your work and achievements are readily accessible to those who matter most. And remember, maintaining an up-to-date Ezfolio is key to staying connected with your audience. Regularly updating your page with new projects, experiences, and skills not only keeps your portfolio fresh and relevant but also demonstrates your ongoing growth and development as a developer. 
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhatIsApp