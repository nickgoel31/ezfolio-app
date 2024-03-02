"use client"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import React from 'react'

const sampleBio = `I am a full-stack developer with a passion for creating innovative and user-friendly applications. I have experience in both front-end and back-end technologies, and I am always looking to expand my skill set and take on new challenges. I am a team player who is highly motivated and eager to learn, and I am confident in my ability to contribute to any project.`

export const CreateAccountSection = () => {
  return (
    <div className='w-full flex h-full gap-5'>
                        <div className='space-y-2 w-full flex-[1.5] flex flex-col justify-center'>
                            <h3 className='font-bold text-2xl'>Create a profile</h3>
                            <p className='text-sm text-muted-foreground font-medium'>
                            To get started on Ezfolio, simply register for an account using your email or social media credentials. Once registered, you can begin setting up your userpage, where you'll have the opportunity to upload a profile picture, add a title that captures your essence, and craft a brief bio to introduce yourself to visitors. What sets Ezfolio apart is its customization options, allowing you to tailor the appearance of your page to align with your personal style. Whether you prefer a minimalist aesthetic or something more vibrant and expressive, Ezfolio gives you the freedom to make your profile truly your own.
                            </p>
                        </div>

                        <div className='w-full flex-[1] h-full flex items-center justify-center p-10 rounded-xl overflow-hidden object-fill'>
                            <div className='border w-[300px] h-full rounded-xl border-foreground/10 shadow-md bg-gradient-to-tr from-violet-950/40 overflow-hidden'>
                                <div className='w-full h-full p-4 px-7 flex flex-col justify-between space-y-3 text-muted-foreground'>
                                    <div className='w-full h-full flex flex-col space-y-3 text-muted-foreground'>
                                        <div className='space-y-1 w-full flex flex-col items-center justify-center'>
                                            <div className='h-8 w-8 rounded-full bg-background/40 border border-foreground/5 flex items-center justify-center text-[0.55rem] font-semibold text-muted-foreground'>H</div>
                                            
                                        </div>
                                        <div className='space-y-1'>
                                            <p className='text-[0.45rem] font-medium'>Username</p>
                                            <Input className='w-full h-7 text-[0.45rem] bg-background/40 border border-foreground/5' value={"harshgoel"}/>
                                        </div>
                                        <div className='space-y-1'>
                                            <p className='text-[0.45rem] font-medium'>Page Title</p>
                                            <Input className='w-full h-7 text-[0.45rem] bg-background/40 border border-foreground/5' value={"harshgoel"}/>
                                        </div>
                                        <div className='space-y-1'>
                                            <p className='text-[0.45rem] font-medium'>Page Bio</p>
                                            <Textarea className='w-full min-h-14 overflow-hidden max-h-14 text-[0.35rem] bg-background/40 border border-foreground/5' value={sampleBio}/>
                                        </div>
                                    </div>

                                    <div className='w-full'>
                                        <button  className='w-full rounded p-2 bg-gradient-to-t from-violet-300/10 via-violet-300/10 to-violet-500/10 text-[0.45rem] text-medium'>
                                            <Link href={"/login"} className=''>Create your Ezfolio</Link>
                                        </button>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
  )
}


export const ShowcaseWorkSection = () => {
    return (
        <div className='w-full flex h-full gap-5'>
                        <div className='w-1/2 h-full flex items-center justify-center p-10 rounded-xl overflow-hidden object-fill'>
                            <div className='border w-[300px] h-full rounded-xl border-foreground/10 shadow-md bg-gradient-to-tr from-violet-950/40 overflow-hidden'>
                                <div className='w-full h-full p-4 px-7 flex flex-col justify-between space-y-3 text-muted-foreground'>
                                    <div className='w-full h-full flex flex-col space-y-3 text-muted-foreground'>
                                        <div className='space-y-1 w-full flex flex-col items-center justify-center'>
                                            <div className='h-8 w-8 rounded-full bg-background/40 border border-foreground/5 flex items-center justify-center text-[0.55rem] font-semibold text-muted-foreground'>H</div>
                                            
                                        </div>
                                        <div className='space-y-1'>
                                            <p className='text-[0.45rem] font-medium'>Username</p>
                                            <Input className='w-full h-7 text-[0.45rem] bg-background/40 border border-foreground/5' value={"harshgoel"}/>
                                        </div>
                                        <div className='space-y-1'>
                                            <p className='text-[0.45rem] font-medium'>Page Title</p>
                                            <Input className='w-full h-7 text-[0.45rem] bg-background/40 border border-foreground/5' value={"harshgoel"}/>
                                        </div>
                                        <div className='space-y-1'>
                                            <p className='text-[0.45rem] font-medium'>Page Bio</p>
                                            <Textarea className='w-full min-h-14 overflow-hidden max-h-14 text-[0.35rem] bg-background/40 border border-foreground/5' value={sampleBio}/>
                                        </div>
                                    </div>

                                    <div className='w-full'>
                                        <button  className='w-full rounded p-2 bg-gradient-to-t from-violet-300/10 via-violet-300/10 to-violet-500/10 text-[0.45rem] text-medium'>
                                            <Link href={"/login"} className=''>Create your Ezfolio</Link>
                                        </button>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        <div className='space-y-2 w-1/2 flex flex-col items-end justify-center h-full '>
                        <h3 className='font-bold text-2xl'>Showcase Your Work and Experiences</h3>
                        <p className='text-sm text-muted-foreground font-medium text-end'>
                        Once your userpage is set up, it's time to start filling it with content that truly represents your professional journey and capabilities. Begin by uploading your projects, each accompanied by detailed descriptions and eye-catching images that effectively showcase your skills and creativity to visitors. Additionally, share insights into your professional journey by adding experiences, including past roles, responsibilities, and notable achievements. This allows others to gain a deeper understanding of your background and expertise. Finally, make sure to highlight your skills and proficiency by listing both your technical abilities and soft skills. Whether it's programming languages, development tools, or effective communication and teamwork, showcasing your diverse skill set is essential for making a compelling impression on potential collaborators, clients, or employers..
                        </p>
                    </div>
                    </div>
    )
}

export const ShareAndConnectSection = () => {
    return (
        <div className='w-full flex h-full gap-5'>
            <div className='space-y-2 w-1/2 flex flex-col justify-center'>
                <h3 className='font-bold text-2xl'>Share and Connect</h3>
                <p className='text-sm text-muted-foreground font-medium'>
                    Ezfolio offers seamless integration of your social links, enhancing your online presence and expanding your networking opportunities effortlessly. Whether it's your GitHub profile, LinkedIn page, or personal website, connecting your social accounts allows visitors to explore more about you beyond your Ezfolio page. Once you've put the finishing touches on your Ezfolio, sharing it with your network is a breeze. With just a few clicks, you can distribute your portfolio to friends, colleagues, and potential employers, ensuring that your work and achievements are readily accessible to those who matter most. And remember, maintaining an up-to-date Ezfolio is key to staying connected with your audience. Regularly updating your page with new projects, experiences, and skills not only keeps your portfolio fresh and relevant but also demonstrates your ongoing growth and development as a developer. 
                </p>
            </div> 

                        <div className='w-1/2 h-full flex items-center justify-center p-10 rounded-xl overflow-hidden object-fill'>
                            <div className='border w-[300px] h-full rounded-xl border-foreground/10 shadow-md bg-gradient-to-tr from-violet-950/40 overflow-hidden'>
                                <div className='w-full h-full p-4 px-7 flex flex-col justify-between space-y-3 text-muted-foreground'>
                                    <div className='w-full h-full flex flex-col space-y-3 text-muted-foreground'>
                                        <div className='space-y-1 w-full flex flex-col items-center justify-center'>
                                            <div className='h-8 w-8 rounded-full bg-background/40 border border-foreground/5 flex items-center justify-center text-[0.55rem] font-semibold text-muted-foreground'>H</div>
                                            
                                        </div>
                                        <div className='space-y-1'>
                                            <p className='text-[0.45rem] font-medium'>Username</p>
                                            <Input className='w-full h-7 text-[0.45rem] bg-background/40 border border-foreground/5' value={"harshgoel"}/>
                                        </div>
                                        <div className='space-y-1'>
                                            <p className='text-[0.45rem] font-medium'>Page Title</p>
                                            <Input className='w-full h-7 text-[0.45rem] bg-background/40 border border-foreground/5' value={"harshgoel"}/>
                                        </div>
                                        <div className='space-y-1'>
                                            <p className='text-[0.45rem] font-medium'>Page Bio</p>
                                            <Textarea className='w-full min-h-14 overflow-hidden max-h-14 text-[0.35rem] bg-background/40 border border-foreground/5' value={sampleBio}/>
                                        </div>
                                    </div>

                                    <div className='w-full'>
                                        <button  className='w-full rounded p-2 bg-gradient-to-t from-violet-300/10 via-violet-300/10 to-violet-500/10 text-[0.45rem] text-medium'>
                                            <Link href={"/login"} className=''>Create your Ezfolio</Link>
                                        </button>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
    )
}