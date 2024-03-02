"use client"
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Eye, FolderKanban, Hand } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const sampleBio = `I am a full-stack developer with a passion for creating innovative and user-friendly applications. I have experience in both front-end and back-end technologies, and I am always looking to expand my skill set and take on new challenges. I am a team player who is highly motivated and eager to learn, and I am confident in my ability to contribute to any project.`

export const CreateAccountSection = () => {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start h-full gap-5'>
                        <div className='space-y-2 w-full flex-[1.5] flex flex-col justify-center'>
                            <h3 className='font-bold text-2xl'>Create a profile</h3>
                            <p className='text-sm text-muted-foreground font-medium'>
                            To get started on Ezfolio, simply register for an account using your email or social media credentials. Once registered, you can begin setting up your userpage, where you'll have the opportunity to upload a profile picture, add a title that captures your essence, and craft a brief bio to introduce yourself to visitors. What sets Ezfolio apart is its customization options, allowing you to tailor the appearance of your page to align with your personal style. Whether you prefer a minimalist aesthetic or something more vibrant and expressive, Ezfolio gives you the freedom to make your profile truly your own.
                            </p>
                        </div>

                        <div className='w-full flex-[1]  flex items-center justify-center p-10 rounded-xl overflow-hidden object-fill'>
                            <div className='border w-[300px] h-[300px] rounded-xl border-foreground/10 shadow-md bg-gradient-to-tr from-violet-950/40 overflow-hidden'>
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
        <div className='w-full flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start h-full gap-5'>
                        <div className='space-y-2 w-full flex-[1.5] flex flex-col justify-center'>
                            <h3 className='font-bold text-2xl'>Showcase your work</h3>
                            <p className='text-sm text-muted-foreground font-medium'>
                            Begin by uploading your projects, each accompanied by detailed descriptions and eye-catching images that effectively showcase your skills and creativity to visitors. Additionally, share insights into your professional journey by adding experiences, including past roles, responsibilities, and notable achievements. This allows others to gain a deeper understanding of your background and expertise. Finally, make sure to highlight your skills and proficiency by listing both your technical abilities and soft skills. Whether it's programming languages, development tools, or effective communication and teamwork, showcasing your diverse skill set is essential for making a compelling impression on potential collaborators, clients, or employers.
                            </p>
                        </div>

                        <div className='w-full flex-[1]  flex items-center justify-center p-10 rounded-xl overflow-hidden object-fill'>
                            <div className='border w-[300px] h-[300px] rounded-xl border-foreground/10 shadow-md bg-gradient-to-tr from-violet-950/40 overflow-hidden'>
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

export const AppearanceSection = () => {
    return (
        <div className='w-full flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start h-full gap-5'>
                        <div className='space-y-2 w-full flex-[1.5] flex flex-col justify-center'>
                            <h3 className='font-bold text-2xl'>Customize it your way</h3>
                            <p className='text-sm text-muted-foreground font-medium'>
                            With Ezfolio, you have the freedom to personalize your userpage to reflect your unique personality and style. Choose from a variety of themes, color schemes, and layout options to create a page that resonates with you. Whether you're a fan of minimalism, bold and vibrant designs, or something in between, Ezfolio has something for everyone. Additionally, you can add custom sections to your page, such as a portfolio, blog, or contact form, to further enhance your user experience. The possibilities are endless, and the power to shape your online presence is in your hands.
                            </p>
                        </div>

                        <div className='w-full flex-[1] relative h-[450px]  flex items-center justify-center p-10 rounded-xl object-fill'>
                            <AppearanceShowcaseCard1 />
                            <AppearanceShowcaseCard2 />
                            <AppearanceShowcaseCard3 />
                        </div>
                    </div>
    )
}



export const AppearanceShowcaseCard1 = () => {
    return (
        <div className='border w-[300px] z-[3] h-[400px] rotate-2 -translate-y-3 rounded-xl border-foreground/10 shadow-xl bg-gradient-to-tr dark:from-[#110f26] from-[#ccc5ff] to-[#eae9f8] dark:to-[#0e0d12] overflow-hidden py-6 px-8'>
                                <div className='w-full h-full flex flex-col items-center space-y-2'>
                                    <div className='space-y-1.5 w-full flex flex-col items-center justify-center'>
                                        <div className='h-8 w-8 rounded-full bg-background/40 border border-foreground/5 flex items-center justify-center text-[0.55rem] font-semibold text-muted-foreground'>H</div>
                                        <div className='text-center'>
                                            <h5 className='text-[0.55rem] font-semibold'>Harsh Goel</h5>
                                            <p className='text-[0.35rem] text-muted-foreground'>@harshgoel</p>
                                        </div>
                                        
                                    </div>
                                    <div className='w-full space-y-1'>
                                        <h5 className='text-[0.55rem] font-semibold'>Bio</h5>
                                        <div className='w-full overflow-hidden text-[0.35rem] bg-background/40 border border-foreground/5 rounded text-muted-foreground p-2'>
                                            {sampleBio}
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-3 w-full items-center gap-3'>
                                        <div className='bg-background/40 border border-foreground/5 rounded flex flex-col p-1.5 items-center justify-center text-[0.35rem] text-muted-foreground font-medium space-y-1 outline outline-[0.5px] outline-offset-1 outline-foreground/20'>
                                            <FolderKanban size={8}/>
                                            <p>Projects</p>
                                        </div>
                                        <div className='bg-background/40 border border-foreground/5 rounded flex flex-col p-1.5 items-center justify-center text-[0.35rem] text-muted-foreground font-medium space-y-1'>
                                            <Eye size={8}/>
                                            <p>Experience</p>
                                        </div>
                                        <div className='bg-background/40 border border-foreground/5 rounded flex flex-col p-1.5 items-center justify-center text-[0.35rem] text-muted-foreground font-medium space-y-1'>
                                            <Hand size={8}/>
                                            <p>Skills</p>
                                        </div>
                                    </div>

                                    <div className='w-full flex flex-col gap-1.5'>
                                        <div className='bg-background/40 border border-foreground/5 rounded flex p-1.5 items-center text-[0.35rem] text-muted-foreground font-medium space-y-1'>
                                            <p>Ezfolio App</p>
                                            
                                        </div>

                                        <div className='bg-background/40 border border-foreground/5 rounded flex p-1.5 items-center text-[0.35rem] text-muted-foreground font-medium space-y-1'>
                                            <p>Netedge India</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}

export const AppearanceShowcaseCard4 = () => {
    return (
        <div className='border w-[300px] z-[1] h-[400px] -rotate-3 -translate-x-8  rounded-xl border-foreground/10 shadow-xl bg-gradient-to-tr dark:from-[#180f26] from-[#d0b7f7] dark:to-[#100d12] overflow-hidden py-6 px-8'>
                                <div className='w-full h-full flex flex-col items-center space-y-2'>
                                    <div className='space-y-1.5 w-full flex flex-col items-center justify-center'>
                                        <div className='h-8 w-8 rounded-full bg-background/40 border border-foreground/5 flex items-center justify-center text-[0.55rem] font-semibold text-muted-foreground'>H</div>
                                        <div className='text-center'>
                                            <h5 className='text-[0.55rem] font-semibold'>Alex Wasabi</h5>
                                            <p className='text-[0.35rem] text-muted-foreground'>@alexwashere</p>
                                        </div>
                                        
                                    </div>
                                    <div className='w-full space-y-1'>
                                        <h5 className='text-[0.55rem] font-semibold'>Bio</h5>
                                        <div className='w-full overflow-hidden text-[0.35rem] bg-background/40 border border-foreground/5 rounded text-muted-foreground p-2'>
                                            {sampleBio}
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-3 w-full items-center gap-3'>
                                        <div className='bg-background/40 border border-foreground/5 rounded flex flex-col p-1.5 items-center justify-center text-[0.35rem] text-muted-foreground font-medium space-y-1 '>
                                            <FolderKanban size={8}/>
                                            <p>Projects</p>
                                        </div>
                                        <div className='bg-background/40 border border-foreground/5 rounded flex flex-col p-1.5 items-center justify-center text-[0.35rem] text-muted-foreground font-medium space-y-1 outline outline-[0.5px] outline-offset-1 outline-foreground/20'>
                                            <Eye size={8}/>
                                            <p>Experience</p>
                                        </div>
                                        <div className='bg-background/40 border border-foreground/5 rounded flex flex-col p-1.5 items-center justify-center text-[0.35rem] text-muted-foreground font-medium space-y-1'>
                                            <Hand size={8}/>
                                            <p>Skills</p>
                                        </div>
                                    </div>

                                    <div className='w-full flex flex-col gap-1.5'>
                                        <div className='bg-background/40 border border-foreground/5 rounded flex p-1.5 items-center text-[0.35rem] text-muted-foreground font-medium space-y-1'>
                                            <p>Ezfolio App</p>
                                            
                                        </div>

                                        <div className='bg-background/40 border border-foreground/5 rounded flex p-1.5 items-center text-[0.35rem] text-muted-foreground font-medium space-y-1'>
                                            <p>Netedge India</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}

export const AppearanceShowcaseCard2 = () => {
    return (
        <div className='border w-[290px]  group-hover:animate-revolutionize-card transition h-[340px] rounded-xl border-foreground/10 shadow-md bg-gradient-to-tr from-background to-[#0d0b10] overflow-hidden py-6 px-8'>
                                <div className='w-full h-full flex flex-col items-center space-y-2 opacity-30'>
                                    <div className='space-y-1.5 w-full flex flex-col items-center justify-center'>
                                        <div className='h-8 w-8 rounded-full bg-background/40 border border-foreground/5 flex items-center justify-center text-[0.55rem] font-semibold text-muted-foreground'>H</div>
                                        <div className='text-center'>
                                            <h5 className='text-[0.55rem] font-semibold'>Harsh Goel</h5>
                                            <p className='text-[0.35rem] text-muted-foreground'>@harshgoel</p>
                                        </div>
                                        
                                    </div>
                                    <div className='w-full space-y-1'>
                                        <h5 className='text-[0.55rem] font-semibold'>Bio</h5>
                                        <div className='w-full overflow-hidden text-[0.35rem] bg-background/40 border border-foreground/5 rounded text-muted-foreground p-2'>
                                            {sampleBio}
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-3 w-full items-center gap-3'>
                                        <div className='bg-background/40 border border-foreground/5 rounded flex flex-col p-1.5 items-center justify-center text-[0.35rem] text-muted-foreground font-medium space-y-1 outline outline-[0.5px] outline-offset-1 outline-foreground/20'>
                                            <FolderKanban size={8}/>
                                            <p>Projects</p>
                                        </div>
                                        <div className='bg-background/40 border border-foreground/5 rounded flex flex-col p-1.5 items-center justify-center text-[0.35rem] text-muted-foreground font-medium space-y-1'>
                                            <Eye size={8}/>
                                            <p>Experience</p>
                                        </div>
                                        <div className='bg-background/40 border border-foreground/5 rounded flex flex-col p-1.5 items-center justify-center text-[0.35rem] text-muted-foreground font-medium space-y-1'>
                                            <Hand size={8}/>
                                            <p>Skills</p>
                                        </div>
                                    </div>

                                    <div className='w-full flex flex-col gap-1.5'>
                                        <div className='bg-background/40 border border-foreground/5 rounded flex p-1.5 items-center text-[0.35rem] text-muted-foreground font-medium space-y-1'>
                                            <p>Ezfolio App</p>
                                            
                                        </div>

                                        <div className='bg-background/40 border border-foreground/5 rounded flex p-1.5 items-center text-[0.35rem] text-muted-foreground font-medium space-y-1'>
                                            <p>Netedge India</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}

export const AppearanceShowcaseCard3 = () => {
    return (
        <div className='border blur-[0.5px] w-[300px] h-[400px] z-[1] rounded-xl border-foreground/10 shadow-xl bg-gradient-to-r dark:from-[#8a75c3] from-[#b4a0ec] to-[#9577e9] dark:to-[#7657cb] overflow-hidden py-6 px-8 group-hover:animate-changing-color-light dark:group-hover:animate-changing-color'>
                                <div className='w-full h-full flex flex-col items-center space-y-2'>
                                    <div className='space-y-1.5 w-full flex flex-col items-center justify-center'>
                                        <div className='h-8 w-8 rounded-full bg-teal-50/40 text-neutral-950 border border-foreground/5 flex items-center justify-center text-[0.55rem] font-semibold text-muted-foreground'>H</div>
                                        <div className='text-center'>
                                            <h5 className='text-[0.55rem] font-semibold'>Alex Wasabi</h5>
                                            <p className='text-[0.35rem] text-muted-foreground'>@alexislit</p>
                                        </div>
                                        
                                    </div>
                                    <div className='w-full space-y-1 text-teal-950'>
                                        <h5 className='text-[0.55rem] font-semibold '>Bio</h5>
                                        <div className='w-full overflow-hidden text-[0.35rem] bg-teal-100/40 text-neutral-950 border border-foreground/5 rounded p-2'>
                                            {sampleBio}
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-3 w-full items-center gap-3 text-neutral-950'>
                                        <div className='bg-teal-50/40 text-neutral-950/80 border border-foreground/5 rounded flex flex-col p-1.5 items-center justify-center text-[0.35rem] font-medium space-y-1 outline outline-[0.5px] outline-offset-1 outline-teal-800/30'>
                                            <FolderKanban size={8}/>
                                            <p>Projects</p>
                                        </div>
                                        <div className='bg-teal-100/40 text-neutral-950/80 border border-foreground/5 rounded flex flex-col p-1.5 items-center justify-center text-[0.35rem]  font-medium space-y-1'>
                                            <Eye size={8}/>
                                            <p>Experience</p>
                                        </div>
                                        <div className='bg-teal-100/40 text-neutral-950/80 border border-foreground/5 rounded flex flex-col p-1.5 items-center justify-center text-[0.35rem]  font-medium space-y-1'>
                                            <Hand size={8}/>
                                            <p>Skills</p>
                                        </div>
                                    </div>

                                    <div className='w-full flex flex-col gap-1.5 text-neutral-950'>
                                        <div className='bg-teal-100/40 text-neutral-950/80 border border-foreground/5 rounded flex p-1.5 items-center text-[0.35rem]  font-medium space-y-1'>
                                            <p>Ezfolio App</p>
                                            
                                        </div>

                                        <div className='bg-teal-100/40 text-neutral-950/80 border border-foreground/5 rounded flex p-1.5 items-center text-[0.35rem] font-medium space-y-1'>
                                            <p>Netedge India</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
    )
}


export const FeatureCard1 = () => {
    return (
        <div className='feature-showcase-feature-section-card-1 border w-[280px] transition h-[40px] rounded-xl border-foreground/10 shadow-md bg-gradient-to-tr from-background to-[#0d0b10] overflow-hidden text-xs font-medium text-muted-foreground flex items-center justify-between px-4'>
            <h1>Projects</h1>
            <p className='text-[0.55rem]'>{`(4)`}</p>
        </div>
    )
}

export const FeatureCard2 = () => {
    return (
        <div className='feature-showcase-feature-section-card-2 border w-[280px] transition h-[40px] rounded-xl border-foreground/10 shadow-md bg-gradient-to-tr from-background to-[#0d0b10] overflow-hidden text-xs font-medium text-muted-foreground flex items-center justify-between px-4'>
            <h1>Experience</h1>
            <p className='text-[0.55rem]'>{`(3)`}</p>
        </div>
    )
}

export const FeatureCard3 = () => {
    return (
        <div className='feature-showcase-feature-section-card-3 border w-[280px] transition h-[40px] rounded-xl border-foreground/10 shadow-md bg-gradient-to-tr from-background to-[#0d0b10] overflow-hidden text-xs font-medium text-muted-foreground flex items-center justify-between px-4'>
            <h1>Skills</h1>
            <p className='text-[0.55rem]'>{`(7)`}</p>
        </div>
    )
}