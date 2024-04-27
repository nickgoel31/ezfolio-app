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
    currentAdvancedPortfolioTheme: AdvancedPortfolioTheme
}

const UserpageAdvancedPortfolioPage = ({userPage,title,bio,id,projects,experiences,skills,colorScheme,currentFont, pageLayout, hasSocialLinks, fontWeight, vipTag,uniqueTag, currentAdvancedPortfolioTheme}:Props) => {

  useEffect(() => {},[])

  return (
    <>
    <div className='w-full min-h-full relative flex flex-col items-center justify-start' style={{fontFamily: `${currentFont.family}`,backgroundColor:`${currentAdvancedPortfolioTheme.primaryBgColor}`}}>

      <div className='h-[85vh] w-full flex items-center px-32 mx-auto space-x-10 relative' style={{color: `${currentAdvancedPortfolioTheme.primaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.primaryBgColor}`}} >
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
              Hello! I'm {title}
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
                {currentAdvancedPortfolioTheme.id === 1 && <Image src={"/arrow-black.png"} alt='arrow'  width={50} height={50} />}
                {currentAdvancedPortfolioTheme.id === 2 && <Image src={"/arrow-white.png"} alt='arrow'  width={50} height={50} />}
                
              </div>
              <Link href={"#projects"}>
                <Button variant={'default'} style={{color: `${currentAdvancedPortfolioTheme.secondaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.secondaryBgColor}`}} >See my projects</Button>
              </Link>

            </div>
        </div>
      </div>

      {(experiences.length > 0 || userPage.skills.length > 0) && (
        <div className='  w-full flex px-32 mx-auto space-x-14 py-16 ' style={{color: `${currentAdvancedPortfolioTheme.secondaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.secondaryBgColor}`}}>
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

          <div className='grid grid-cols-3 gap-8'>
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
      <div id='projects' className='  w-full flex flex-col items-center justify-center px-32 pt-16 mx-auto space-x-14 pb-16 space-y-8' style={{color: `${currentAdvancedPortfolioTheme.secondaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.secondaryBgColor}`}}>
          <h1 className='text-3xl font-semibold'>
          Projects
          </h1>      

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
              {projects.map((project,index) => (
                <div key={index} className=' rounded-xl p-6 space-y-4' style={{color: `${currentAdvancedPortfolioTheme.primaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.primaryBgColor}`}}>
                <h1 className='text-xl font-semibold'>
                  {project.projectTitle}
                </h1>
                <p className='font-medium text-muted-foreground'>
                  {project.projectDesc}
                </p>
                <Button variant={'outline'} className=' mt-2' style={{color: `${currentAdvancedPortfolioTheme.primaryBgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.accentColor}`}}>Visit</Button>
              </div>
              ))}
          </div> 
      </div>

      <div className='py-14 w-full flex flex-col items-center justify-center px-32 mx-auto space-x-10 ' style={{color: `${currentAdvancedPortfolioTheme.primaryFgColor}`, backgroundColor:`${currentAdvancedPortfolioTheme.primaryBgColor}`}}> 
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
        <span className='opacity-70 text-xs uppercase'>Powered by&nbsp;</span><span className='text-lg font-semibold'>{process.env.APP_NAME}</span>
      </Link>
    </div>
    </>
  )
}

export default UserpageAdvancedPortfolioPage