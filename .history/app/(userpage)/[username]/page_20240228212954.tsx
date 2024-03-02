import { getColorSchemeOfUserPage } from '@/actions/colorscheme/get-colorscheme';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Head from 'next/head';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import { FolderKanban } from 'lucide-react';
import { getFontOfUserPage } from '@/actions/font/get-font';
import { getUserpageByUserId } from '@/actions/userpage/get-userpage';
import { getProjectByUserPageId } from '@/helpers/get-project';
import { getExperienceByUserPageId } from '@/helpers/get-exp';
import NoUserPageFound from '@/components/no-userpage-found';
import MainContentPage from '@/components/main-content-page';

const UserPage = async ({params}:{params:{userName:string}}) => {

  const {userName} = params;
  if(!userName) return;
  const userPage = await getUserpageByUserId(userName)

  if(!userPage) return (
    <NoUserPageFound userName={userName}/>
  );

  const {title,bio,username,id} = userPage

  const projects = await getProjectByUserPageId(id)
  const experiences = await getExperienceByUserPageId(id)

  const colorScheme = await getColorSchemeOfUserPage(userPage.colorSchemeId)
  if(!colorScheme) return <div>Loading</div>

  const currentFont = await getFontOfUserPage(userPage.fontId)
  if(!currentFont) return <div>Loading</div>

  const hasSocialLinks = userPage.githubUrl || userPage.linkedinUrl || userPage.instagramUrl;

  const fontWeight = userPage.fontWeight || 400;


  return (
    <>
    <div className='w-full min-h-full relative flex flex-col items-center justify-start'>
      <span className={cn('absolute z-[-1] w-full h-full ')} style={{backgroundColor: `${colorScheme.firstBgColor}`, background: `linear-gradient(45deg, ${colorScheme.firstBgColor} 0%, ${colorScheme.secondBgColor} 50%,${colorScheme.thirdBgColor} 100%);`}} />
      
      <div className=' flex items-center pt-14  flex-col  space-y-3 px-4 w-full max-w-[500px]' style={{fontFamily: `${currentFont.family}`, fontWeight:`${fontWeight}`}}>
        <div className='flex flex-col space-y-2 items-center justify-center'>
          <Avatar className='h-14 w-14'>
            <AvatarFallback className='uppercase text-xl'>{title.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className='space-y-1 text-center'>
            <h4 className={cn('text-xl ')} style={{color: `${colorScheme.fgColor}`}}>{title}</h4>
            <p className={cn('text-xs  opacity-50')} style={{color: `${colorScheme.fgColor}`,fontWeight:`${fontWeight-400}`}}>@{username}</p>
          </div>
        </div>

        <div className={cn('bio  shadow-sm rounded p-4 w-full text-sm font-medium  space-y-1 ')} style={{color: `${colorScheme.cardFgColor}`, backgroundColor:`${colorScheme.cardColor}`}}>
          <h1 className='text-sm' style={{fontWeight:`${fontWeight-100}`}}>Bio</h1>
          <p className='opacity-80' style={{fontWeight:`${fontWeight-300}`}}>{bio}</p>
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

      <Link href={"http://localhost:3000/showcase"} target='_blank' className='text-center font-medium pt-8 pb-14' style={{color:`${colorScheme.fgColor}`}}>
        <span className='opacity-70 text-xs uppercase'>Powered by&nbsp;</span><span className='text-lg font-semibold'>LinkIn</span>
      </Link>
    </div>
    </>
  )
}

export default UserPage