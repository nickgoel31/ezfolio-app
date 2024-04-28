"use client"

import { AdvancedPortfolioTheme, ColorScheme, Experience, PageFont, PageLayout, Project, UserPage } from '@prisma/client'
import React, { useEffect } from 'react'
import MainContentPage from '../main-content-page'

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Building2, Crown, Diamond, FolderKanban, Gem, Hand, LucideDiamond } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Head from 'next/head';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { UserPageType } from '@/types';
import { Button } from '../ui/button';
import Image from 'next/image';
import { updateViewCount } from '@/actions/userpage/edit'

type Props = {
    userPage:UserPage,
    title:string,
    bio:string,
    id:string,
    projects:Project[],
    experiences:Experience[],
    skills:string[],
    colorScheme:ColorScheme,
    currentFont:PageFont,
    pageLayout:PageLayout,
    hasSocialLinks:string | null,
    fontWeight:number,
    vipTag:boolean,
    uniqueTag:boolean,
    currentAdvancedPortfolioTheme:AdvancedPortfolioTheme,
}

export const UserpageAdvancedPortfolioPageModernTheme = ({userPage,title,bio,id,projects,experiences,skills,colorScheme,currentFont, pageLayout, hasSocialLinks, fontWeight, vipTag,uniqueTag, currentAdvancedPortfolioTheme}:Props) => {

  useEffect(() => {
    updateViewCount(userPage.id)
  },[])

  return (
    <>
    <div className='w-full min-h-full relative flex flex-col items-center justify-start ' style={{fontFamily: `${currentFont.family}`,backgroundColor:`${currentAdvancedPortfolioTheme.primaryBgColor}`}}>

      <div className=' w-full flex flex-col md:flex-row md:items-center py-32 lg:py-48 px-6 lg:px-32  mx-auto gap-24 lg:gap-10 relative' style={{color: `${currentAdvancedPortfolioTheme.primaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.primaryBgColor}`}} >
      {hasSocialLinks && (
          <div className='socials absolute top-8 left-[50%] translate-x-[-50%] flex items-center justify-start gap-2' style={{ color: `${currentAdvancedPortfolioTheme.primaryFgColor}`}}>
            {userPage.githubUrl && (
              <Link href={userPage.githubUrl} target='_blank' className='p-1.5 rounded-full shadow-sm hover:opacity-80 transition hover:-translate-y-1' >
                  <FaGithub size={26}/>
              </Link>
            )}
            {userPage.instagramUrl && (
              <Link href={userPage.instagramUrl} target='_blank' className='p-1.5 rounded-full shadow-sm hover:opacity-80 transition hover:-translate-y-1'>
                  <FaInstagram size={26}/>
              </Link>
            )}
            {userPage.linkedinUrl && (
              <Link href={userPage.linkedinUrl} target='_blank' className='p-1.5 rounded-full shadow-sm hover:opacity-80 transition hover:-translate-y-1'>
                  <FaLinkedin size={26}/>
              </Link>
            )}
          </div>
          )}
        <div className='flex flex-col space-y-3 flex-[1]'>
          <Avatar className='h-20 w-20 mb-3'>
              {userPage.pagePicUrl ? (
                <>
                  <AvatarImage src={userPage.pagePicUrl} alt='Page pic' width={100} height={100} />
                  <AvatarFallback className='uppercase text-2xl font-semibold' style={{color: `${currentAdvancedPortfolioTheme.secondaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.secondaryBgColor}`}}>{title.charAt(0)}</AvatarFallback>
                </>
              ):(
                <AvatarFallback className='uppercase text-2xl font-semibold'>{title.charAt(0)}</AvatarFallback>
              )}
              
            </Avatar>

          <div className='text-4xl font-medium '>
              Hello! I&apos;m {title}
          </div>

          
        </div>

        <div className='flex flex-col space-y-2  flex-[1]'>
            <h3 className='font-medium text-2xl'>{userPage.tagline}</h3>
            <p className='font-medium text-muted-foreground'>
              {bio}
            </p>

            <div className='flex gap-4 items-center pt-3 relative'>
              <Link href={`${userPage.linkedinUrl}`} target='_blank'>
                <Button variant={'outline'} className='' style={{color: `${currentAdvancedPortfolioTheme.primaryBgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.accentColor}`}}>Talk to me</Button>
              </Link>
              <div className='absolute bottom-[-90%] left-4 flex items-end'>
                <p className='font-caveat font-semibold text-xl absolute translate-x-[-100%] translate-y-[10%]'>Linkedin</p>
                {currentAdvancedPortfolioTheme.id === 1 && <Image src={"/arrow-black.png"} alt='arrow'  width={50} height={50} className='scale-x-[-1] md:scale-x-0'/>}
                {currentAdvancedPortfolioTheme.id === 2 && <Image src={"/arrow-white.png"} alt='arrow'  width={50} height={50} className='scale-x-[-1] md:scale-x-0'/>}
                
              </div>
              <Link href={"#projects"}>
                <Button variant={'default'} style={{color: `${currentAdvancedPortfolioTheme.secondaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.secondaryBgColor}`}} >See my projects</Button>
              </Link>

            </div>
        </div>
      </div>
      {/* EXP AND SKILLS */}
      {(experiences.length > 0 || userPage.skills.length > 0) && (
        <div className='px-6 lg:px-32  w-full flex lg:flex-row flex-col mx-0 lg:mx-auto gap-14 py-16 ' style={{color: `${currentAdvancedPortfolioTheme.secondaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.secondaryBgColor}`}}>
        {experiences.length > 0 && (
          <div className='flex flex-col flex-[1] space-y-8'>
            <h1 className='text-3xl font-semibold'>
              Work Experience
            </h1>
            
            <div className='flex flex-col gap-8'>
              {experiences.map((exp) => (
                <div key={exp.id} className='flex items-center gap-3'>
                  <div className='rounded-full p-3 ' style={{color: `${currentAdvancedPortfolioTheme.primaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.primaryBgColor}`}}>
                    <Building2 />
                  </div>
                  <div className='flex flex-col gap-0.5'>
                    <h3 className='font-medium'>{exp.jobTitle} at <span className='font-bold'>{exp.jobOrg}</span></h3>
                    <p className='text-sm font-medium text-muted-foreground'>{exp.jobDesc}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
        )}

        {userPage.skills.length > 0 && (
          <div className='flex flex-col flex-[1] space-y-8'>
          <h1 className='text-3xl font-semibold'>
            Skills
          </h1>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {userPage.skills.map((skill,index) => (
              <div key={index} className='flex items-center gap-3'>
              <div className='rounded-full p-3 ' style={{color: `${currentAdvancedPortfolioTheme.primaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.primaryBgColor}`}} >
                <Hand />
              </div>
              <div className='flex flex-col '>
                <h3 className='font-medium'><span className='font-bold'>{skill}</span></h3>
              </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
      )}
      {/* PROJECTS */}
      <div id='projects' className='  w-full flex flex-col items-center justify-center pt-16 px-6 lg:px-32 mx-auto gap-6 pb-16 space-y-8' style={{color: `${currentAdvancedPortfolioTheme.secondaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.secondaryBgColor}`}}>
          <h1 className='text-3xl font-semibold'>
          Projects
          </h1>      

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
              {projects.map((project,index) => (
                <div key={index} className=' rounded-xl p-6 space-y-4 justify-between items-start flex flex-col' style={{color: `${currentAdvancedPortfolioTheme.primaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.primaryBgColor}`}}>
                <div className='space-y-4'>
                  <h1 className='text-xl font-semibold'>
                    {project.projectTitle}
                  </h1>
                  <p className='font-medium text-muted-foreground'>
                    {project.projectDesc}
                  </p>
                </div>
                <Button variant={'outline'} className=' mt-2' style={{color: `${currentAdvancedPortfolioTheme.primaryBgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.accentColor}`}}>Visit</Button>
              </div>
              ))}
          </div> 
      </div>
      {/* FOOTER */}
      <div className='py-14 w-full flex flex-col items-center justify-center mx-auto space-x-10 px-6 lg:px-32' style={{color: `${currentAdvancedPortfolioTheme.primaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.primaryBgColor}`}}> 
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h3 className='font-medium text-muted-foreground'>Interested?</h3>
          <h1 className='text-4xl font-semibold'>Lets work together.</h1>
          <div className='pt-2'>
            <Button variant={'outline'} style={{color: `${currentAdvancedPortfolioTheme.primaryBgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.accentColor}`}}>Talk to me</Button>
          </div>
        </div>
        
      </div>
    </div>

    <div className='sticky bottom-0 w-full  z-[200] flex items-center justify-center shadow-md backdrop-blur-lg py-3 ' style={{color: `${currentAdvancedPortfolioTheme.primaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.primaryBgColor}90`, borderTop: `1px ${currentAdvancedPortfolioTheme.primaryFgColor}20 solid`}}>
      <Link href={"https://ezfolio.social/s"} target='_blank' className='text-center font-medium' style={{color:`${currentAdvancedPortfolioTheme.primaryFgColor}`}}>
        <span className='opacity-70 text-xs uppercase'>Powered by&nbsp;</span><span className='text-lg font-semibold'>{process.env.APP_NAME || "Ezfolio"}</span>
      </Link>
    </div>
    </>
  )
}

export const UserpageAdvancedPortfolioPageNatureTheme = ({userPage,title,bio,id,projects,experiences,skills,colorScheme,currentFont, pageLayout, hasSocialLinks, fontWeight, vipTag,uniqueTag, currentAdvancedPortfolioTheme}:Props) => {
  useEffect(() => {
    updateViewCount(userPage.id)
  },[])
  return (
    <>
    <body className='w-full relative flex flex-col items-center justify-start' >
      <div className='w-full h-full flex-col lg:flex-row flex  '>
        <div className='flex-[3] w-full h-full relative'>
          {/* BACKGROUND IMAGE */}
          <div className='fixed top-0 left-0 w-full h-full z-[-2]'>
            <Image src={"/new-port/1-img.jpg"} alt='thumbnail' width={5000} height={5000} className='w-full h-full object-cover' />
            <span className='bg-black/40 w-full h-full absolute top-0 left-0'></span>
          </div>

          <div className='w-full z-[4] flex flex-col items-start justify-center px-4 lg:px-32 py-16 md:py-32 space-y-16'>
            <div className='space-y-4'>
              <div className='flex items-center gap-3'>
                  <Avatar className='h-20 w-20 mb-3'>
                  {userPage.pagePicUrl ? (
                    <>
                      <AvatarImage src={userPage.pagePicUrl} alt='Page pic' width={100} height={100} />
                      <AvatarFallback className='uppercase text-2xl font-semibold'>{title.charAt(0)}</AvatarFallback>
                    </>
                  ):(
                    <AvatarFallback className='uppercase text-2xl font-semibold'>{title.charAt(0)}</AvatarFallback>
                  )}
                  
                </Avatar>
                <h4 className='font-semibold text-2xl text-white drop-shadow-lg'>{title}</h4>
              </div>
              <h1 className='text-5xl font-semibold text-white drop-shadow-lg leading-tight' >{userPage.tagline}</h1>
              <p className='font-medium drop-shadow-lg text-neutral-200 max-w-screen-md'>
                {bio}
              </p>

              <div className='pt-4'>
                <Link href={"/"} className='p-3  bg-white text-black font-medium'>
                  Work with me
                </Link>
              </div>
            </div>

            <div className='flex flex-col md:flex-row w-full gap-6 items-start'>
              <div className='flex flex-col gap-6 flex-[2] h-full'>

                {/* WORK EXPERIENCE */}
              <div className='bg-black/20 backdrop-blur-lg p-6 w-full h-full'>
                <div className='flex flex-col space-y-4'>
                  <h2 className='text-xl font-semibold text-white uppercase'>Work Experience</h2>
                  <hr className='border-muted-foreground opacity-20'/>

                  <div className='grid grid-cols-1 gap-6 pt-2'>
                    {experiences.map((exp,index) => (
                      <div key={index} className='flex items-center justify-start gap-4 text-white'>
                        <div className='bg-black/20 rounded-full p-3 '>
                          <Building2 size={20} />
                        </div>
                        <div className='flex flex-col'>
                          <h3 className=''>{exp.jobTitle} at <span className='font-semibold'>{exp.jobOrg}</span></h3>
                          <p className='text-muted-foreground text-sm'>Building the next big thing</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

                {/* PROJECTS */}
              <div className='bg-black/20 backdrop-blur-lg p-6 w-full h-full'>
                <div className='flex flex-col space-y-2'>
                  <h2 className='text-xl font-semibold text-white uppercase'>Projects</h2>
                  <hr className='border-muted-foreground opacity-20'/>

                  {projects.map((project,index) => (
                    <div key={index} className='grid grid-cols-1 gap-4 pt-2'>
                      <div className='flex items-center justify-start gap-4 text-white bg-white/5 p-3'>
                        <div className='flex flex-col items-start'>
                          <h3 className='font-semibold'>{project.projectTitle}</h3>
                          <p className='text-muted-foreground text-sm'>{project.projectDesc}</p>

                          {project.projectUrl && (
                            <Link href={project.projectUrl} className='p-1 px-3 font-medium text-sm bg-white text-black mt-4'>
                              Visit
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              </div>
                
                {/* SKILLS */}
              <div className='bg-black/20 backdrop-blur-lg p-6 w-full h-full flex-[1]'>
              <div className='flex flex-col space-y-4'>
                  <h2 className='text-xl font-semibold text-white uppercase'>Skills</h2>
                  <hr className='border-muted-foreground opacity-20'/>

                  <div className='grid grid-cols-1 xl:grid-cols-2 gap-6 pt-2'>
                    {userPage.skills.map((skill,index) => (
                      <div key={index} className='flex items-center justify-start gap-4 text-white'>
                      <div className='bg-black/20 rounded-full p-3 '>
                        <Hand size={20} />
                      </div>
                      <div className='flex flex-col'>
                        <h3 className='font-semibold'>{skill}</h3>
                      </div>
                    </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>  
      </div>  

      <div className='fixed bottom-0 w-full bg-black/50 text-white backdrop-blur-lg z-[200] border-t border-black border-opacity-10 flex items-center justify-center shadow-md py-3'>
        <Link href={"https://ezfolio.social/s"} target='_blank' className='text-center font-medium' >
          <span className='opacity-70 text-xs uppercase'>Powered by&nbsp;</span><span className='text-lg font-semibold'>{process.env.APP_NAME || "Ezfolio"}</span>
        </Link>
      </div>       
    </body>
      
    </>
  )
}

