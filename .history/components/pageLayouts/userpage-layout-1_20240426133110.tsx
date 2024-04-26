import React from 'react'
import MainContentPage from '../main-content-page'

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Crown, Diamond, FolderKanban, Gem, LucideDiamond } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Head from 'next/head';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { UserPageType } from '@/types';
import { Project, UserPage } from '@prisma/client';

type Props = {
    userPage:UserPage,
    title:string,
    bio:string,
    id:string,
    projects:Project[],
    experiences:Exper,
    skills:any,
    colorScheme:any,
    currentFont:any,
    pageLayout:any,
    hasSocialLinks:boolean,
    fontWeight:number,
    vipTag:boolean,
    uniqueTag:boolean,
    
}

const UserpageLayoutOne = ({userPage,title,bio,id,projects,experiences,skills,colorScheme,currentFont, pageLayout, hasSocialLinks, fontWeight, vipTag,uniqueTag}:Props) => {
  return (
    <div className='w-full min-h-full relative flex flex-col items-center justify-start'>
      <span className={cn('absolute z-[-1] w-full h-full ')} style={{backgroundColor: `${colorScheme.firstBgColor}`, background: `linear-gradient(45deg, ${colorScheme.firstBgColor} 0%, ${colorScheme.secondBgColor} 50%,${colorScheme.thirdBgColor} 100%);`}} />
      
      <div className=' flex items-center pt-14  flex-col  space-y-3 px-4 w-full max-w-[500px]' style={{fontFamily: `${currentFont.family}`, fontWeight:`${fontWeight}`}}>
        <div className='flex flex-col space-y-2 items-center justify-center'>
          <Avatar className='h-14 w-14'>
            {userPage.pagePicUrl ? (
              <AvatarImage src={userPage.pagePicUrl} alt='Page pic' width={100} height={100} />
            ):(
              <AvatarFallback className='uppercase text-xl'>{title.charAt(0)}</AvatarFallback>
            )}
            
          </Avatar>

          <div className='space-y-1 text-center'>
            <div className='flex items-center gap-2'>
              <h4 className={cn('text-xl ')} style={{color: `${colorScheme.fgColor}`}}>{title}</h4>
              {vipTag && (
                <HoverCard>
                  <HoverCardTrigger>
                    <div style={{color: `${colorScheme.fgColor}`}} className=''>
                    <Crown size={18}/>
                  </div>
                  </HoverCardTrigger>
                  <HoverCardContent className='text-sm p-3 w-fit'>
                    Creator of Ezfolio
                  </HoverCardContent>
                </HoverCard>
                
              )}
              {uniqueTag && (
                <HoverCard>
                  <HoverCardTrigger>
                    <div style={{color: `${colorScheme.fgColor}`}} className=''>
                    <Gem size={18}/>
                  </div>
                  </HoverCardTrigger>
                  <HoverCardContent className='text-sm p-3 w-fit'>
                    Rare username
                  </HoverCardContent>
                </HoverCard>
                
              )}
            </div>
            <p className={cn('text-xs  opacity-50')} style={{color: `${colorScheme.fgColor}`,fontWeight:`${fontWeight-400}`}}>@{userPage.username}</p>
          </div>
        </div>

        <div className={cn('bio  shadow-sm rounded p-4 w-full text-sm font-medium  space-y-1 ')} style={{color: `${colorScheme.cardFgColor}`, backgroundColor:`${colorScheme.cardColor}`}}>
          <h1 className='text-sm' style={{fontWeight:`${fontWeight}`}}>Bio</h1>
          <p className='opacity-80' style={{fontWeight:`${fontWeight-100}`}}>{bio}</p>
        </div>

        <MainContentPage projects={projects} exps={experiences} userPage={userPage} colorScheme={colorScheme}/>

        

        {hasSocialLinks && (
          <div className='socials w-full max-w-[500px] flex items-center justify-end gap-1'>
            {userPage.githubUrl && (
              <Link href={userPage.githubUrl} target='_blank' className='p-1.5 rounded-full shadow-sm hover:opacity-80 transition hover:-translate-y-1' style={{ color: `${colorScheme.fgColor}`}}>
                  <FaGithub size={26}/>
              </Link>
            )}
            {userPage.instagramUrl && (
              <Link href={userPage.instagramUrl} target='_blank' className='p-1.5 rounded-full shadow-sm hover:opacity-80 transition hover:-translate-y-1' style={{ color: `${colorScheme.fgColor}`}}>
                  <FaInstagram size={26}/>
              </Link>
            )}
            {userPage.linkedinUrl && (
              <Link href={userPage.linkedinUrl} target='_blank' className='p-1.5 rounded-full shadow-sm hover:opacity-80 transition hover:-translate-y-1' style={{ color: `${colorScheme.fgColor}`}}>
                  <FaLinkedin size={26}/>
              </Link>
            )}
          </div>
        )}

      </div>

      <Link href={"https://ezfolio.social/s"} target='_blank' className='text-center font-medium pt-8 pb-14' style={{color:`${colorScheme.fgColor}`}}>
        <span className='opacity-70 text-xs uppercase'>Powered by&nbsp;</span><span className='text-lg font-semibold'>{process.env.APP_NAME}</span>
      </Link>
    </div>
  )
}

export default UserpageLayoutOne