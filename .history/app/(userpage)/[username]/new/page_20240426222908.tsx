import { getColorSchemeOfUserPage } from '@/actions/colorscheme/get-colorscheme';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Head from 'next/head';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import { Building2, Crown, Diamond, FolderKanban, Gem, Hand, HandHelping, LucideDiamond } from 'lucide-react';
import { getFontOfUserPage } from '@/actions/font/get-font';
import { getUserpageByUserId } from '@/actions/userpage/get-userpage';
import { getProjectByUserPageId } from '@/helpers/get-project';
import { getExperienceByUserPageId } from '@/helpers/get-exp';
import NoUserPageFound from '@/components/no-userpage-found';
import MainContentPage from '@/components/main-content-page';
import Image from 'next/image';
import { uniqueNames, vipNames } from '@/data';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from '@/components/ui/button';
import { getAdvancedPortfolioThemeOfUserPage } from '@/actions/adv-port/get-adv-port';


const UserPage = async ({params}:{params:{username:string}}) => {

  const {username} = params;
  if(!username) return;
  const userPage = await getUserpageByUserId(username)

  if(!userPage) return (
    <NoUserPageFound userName={username}/>
  );

  const {title,bio,id} = userPage

  const projects = await getProjectByUserPageId(id)
  const experiences = await getExperienceByUserPageId(id)

  const colorScheme = await getColorSchemeOfUserPage(userPage.colorSchemeId)
  if(!colorScheme) return <div>Loading</div>

  const currentFont = await getFontOfUserPage(userPage.fontId)
  if(!currentFont) return <div>Loading</div>

  const currentAdvancedPortfolioTheme = await getAdvancedPortfolioThemeOfUserPage(userPage.advancedPortfolioThemeId)
    if(!currentAdvancedPortfolioTheme) return  <div>Error while fetching data</div>

  const hasSocialLinks = userPage.githubUrl || userPage.linkedinUrl || userPage.instagramUrl;

  const fontWeight = userPage.fontWeight || 400;

  const vipTag = vipNames.includes(username) ? true : false;
  const uniqueTag = uniqueNames.includes(username) ? true : false;

  const isAdvancedPortfolioToggled = userPage.isAdvancedPortfolio;


  return (
    <>
    <div className='w-full min-h-full relative flex flex-col items-center justify-start'>
      <span className={cn('absolute z-[-1] w-full h-full ')} style={{backgroundColor: `${colorScheme.firstBgColor}`, background: `linear-gradient(45deg, ${colorScheme.firstBgColor} 0%, ${colorScheme.secondBgColor} 50%,${colorScheme.thirdBgColor} 100%);`}} />

      {/* <div className='flex  space-x-6 my-14 w-full max-w-screen-md ' style={{fontFamily: `${currentFont.family}`, fontWeight:`${fontWeight}`}}>
        <div className='flex flex-col space-y-3 w-full flex-[1]'>
          <div className=' rounded-lg p-5 flex flex-col items-center justify-center gap-3' style={{color: `${colorScheme.cardFgColor}`, backgroundColor:`${colorScheme.cardColor}`}}>
            <Avatar className='h-14 w-14'>
              {userPage.pagePicUrl ? (
                <AvatarImage src={userPage.pagePicUrl} alt='Page pic' width={100} height={100} />
              ):(
                <AvatarFallback className='uppercase text-xl'>{title.charAt(0)}</AvatarFallback>
              )}
              
            </Avatar>
              
            <div className='space-y-1 text-center'>
            <div className='flex items-center gap-2'>
              <h4 className={cn('text-xl ')} style={{color: `${colorScheme.cardFgColor}`}}>{title}</h4>
              {vipTag && (
                <HoverCard>
                  <HoverCardTrigger>
                    <div style={{color: `${colorScheme.cardFgColor}`}} className=''>
                    <Crown size={18}/>
                  </div>
                  </HoverCardTrigger>
                  <HoverCardContent className='text-sm p-3 w-fit' style={{color: `${colorScheme.cardFgColor}`, backgroundColor:`${colorScheme.cardColor}`}}>
                    Creator of Ezfolio
                  </HoverCardContent>
                </HoverCard>
                
              )}
              {uniqueTag && (
                <HoverCard>
                  <HoverCardTrigger>
                    <div style={{color: `${colorScheme.cardFgColor}`}} className=''>
                    <Gem size={18}/>
                  </div>
                  </HoverCardTrigger>
                  <HoverCardContent className='text-sm p-3 w-fit' style={{color: `${colorScheme.cardFgColor}`, backgroundColor:`${colorScheme.cardColor}`}}>
                    Rare username
                  </HoverCardContent>
                </HoverCard>
                
              )}
            </div>
            <p className={cn('text-xs  opacity-50')} style={{color: `${colorScheme.cardFgColor}`,fontWeight:`${fontWeight-400}`}}>@{username}</p>
          </div>
              

          </div>
          <div className=' rounded-lg p-5 flex flex-col  gap-1' style={{color: `${colorScheme.cardFgColor}`, backgroundColor:`${colorScheme.cardColor}`}}>

            <h1 className='text-md' style={{fontWeight:`${fontWeight}`,color: `${colorScheme.cardFgColor}`}}>Bio</h1>
            <p className='opacity-80 text-sm text-left' style={{fontWeight:`${fontWeight-100}`, color: `${colorScheme.cardFgColor}`}} >{bio}</p>
          </div>

          {hasSocialLinks && (
          <div className='socials w-full max-w-[500px] flex items-center justify-start gap-1'>
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

        <div className=' w-full flex-[2.4]'>
          <MainContentPage projects={projects} exps={experiences} userPage={userPage} colorScheme={colorScheme}/>
        </div>
      </div> */}

      <div className='h-[80vh] bg-white w-full flex items-center px-32 mx-auto space-x-10'>
        <div className='flex flex-col space-y-2 flex-[1]'>
          <Avatar className='h-16 w-16 mb-4'>
              {userPage.pagePicUrl ? (
                <AvatarImage src={userPage.pagePicUrl} alt='Page pic' width={100} height={100} />
              ):(
                <AvatarFallback className='uppercase text-xl'>{title.charAt(0)}</AvatarFallback>
              )}
              
            </Avatar>

          <div className='text-4xl font-medium text-black'>
              Hello! I'm {title}
          </div>

          {hasSocialLinks && (
          <div className='socials w-full flex items-center justify-start gap-1'>
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

        <div className='flex flex-col space-y-2 text-black flex-[1]'>
            <h3 className='font-medium text-2xl'>{userPage.tagline}</h3>
            <p className='font-medium text-muted-foreground'>
              {bio}
            </p>

            <div className='flex gap-4 items-center pt-3'>
              <Button variant={'outline'} className='text-white'>Talk to me</Button>
              <Link href={"#projects"}>
                <Button variant={'default'} >See my projects</Button>
              </Link>

            </div>
        </div>
      </div>

      <div className=' bg-[#FAFAFA] w-full flex px-32 mx-auto space-x-14 py-16 text-black'>
        <div className='flex flex-col flex-[1] space-y-8'>
          <h1 className='text-3xl font-semibold'>
            Work Experience
          </h1>
          
          <div className='flex flex-col gap-8'>
            {experiences.map((exp) => (
              <div key={exp.id} className='flex items-center gap-3'>
                <div className='rounded-full p-3 bg-white'>
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

        <div className='flex flex-col flex-[1] space-y-8'>
          <h1 className='text-3xl font-semibold'>
            Skills
          </h1>

          <div className='grid grid-cols-3 gap-8'>
            {userPage.skills.map((skill,index) => (
              <div key={index} className='flex items-center gap-3'>
              <div className='rounded-full p-3 bg-white'>
                <Hand />
              </div>
              <div className='flex flex-col '>
                <h3 className='font-medium'><span className='font-bold'>{skill}</span></h3>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id='projects' className=' bg-[#FAFAFA] w-full flex flex-col items-center justify-center px-32 mx-auto space-x-14 py-8 pb-16 text-black space-y-8'>
          <h1 className='text-3xl font-semibold'>
          Projects
          </h1>      

          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
              {projects.map((project,index) => (
                <div key={index} className='bg-white rounded-xl p-6 space-y-4'>
                <h1 className='text-xl font-semibold'>
                  {project.projectTitle}
                </h1>
                <p className='font-medium text-muted-foreground'>
                  {project.projectDesc}
                </p>
                <Button variant={'outline'} className='text-white mt-2'>Visit</Button>
              </div>
              ))}
          </div> 
      </div>

      <div className='py-14 bg-white w-full flex flex-col items-center justify-center px-32 mx-auto space-x-10 text-black'>
        <div className='flex flex-col gap-2 items-center justify-center'>
          <h3 className='font-medium text-muted-foreground'>Interested?</h3>
          <h1 className='text-4xl font-semibold'>Lets work together.</h1>
          <div className='pt-2'>
            <Button variant={'outline'} className='text-white'>Talk to me</Button>
          </div>
        </div>
        
      </div>
    </div>

    <div className='sticky bottom-0 w-full bg-white z-[200] border-t border-black border-opacity-10 flex items-center justify-center shadow-md py-3'>
      <Link href={"https://ezfolio.social/s"} target='_blank' className='text-center font-medium' style={{color:`${currentAdvancedPortfolioTheme.primaryFgColor}`}}>
        <span className='opacity-70 text-xs uppercase'>Powered by&nbsp;</span><span className='text-lg font-semibold'>{process.env.APP_NAME}</span>
      </Link>
    </div>
    </>
  )
}

export default UserPage