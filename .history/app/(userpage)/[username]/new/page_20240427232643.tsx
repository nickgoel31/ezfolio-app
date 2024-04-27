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
    <body className='w-full relative flex flex-col items-center justify-start' >

      


      <div className='w-full h-full flex-col lg:flex-row flex  '>
        <div className='flex-[3] w-full h-full relative'>
          {/* BACKGROUND IMAGE */}
          <div className='fixed top-0 left-0 w-full h-full z-[-2]'>
            <Image src={"/new-port/1-img.jpg"} alt='thumbnail' width={5000} height={5000} className='w-full h-full object-cover' />
            <span className='bg-black/40 w-full h-full absolute top-0 left-0'></span>
          </div>

          <div className='w-full z-[4] flex flex-col items-start justify-center px-32 py-32 space-y-16'>
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
              <h1 className='text-5xl font-semibold text-white drop-shadow-lg' >{userPage.tagline}</h1>
              <p className='font-medium drop-shadow-lg text-neutral-200 max-w-screen-md'>
                {bio}
              </p>

              <div className='pt-4'>
                <Link href={"/"} className='p-3  bg-white text-black font-medium'>
                  Work with me
                </Link>
              </div>
            </div>

            <div className='flex w-full gap-6 items-start'>
              <div className='flex flex-col gap-6 flex-[2] h-full'>
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

              <div className='bg-black/20 backdrop-blur-lg p-6 w-full h-full flex-[1]'>
              <div className='flex flex-col space-y-4'>
                  <h2 className='text-xl font-semibold text-white uppercase'>Skills</h2>
                  <hr className='border-muted-foreground opacity-20'/>

                  <div className='grid grid-cols-2 gap-6 pt-2'>
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
          <span className='opacity-70 text-xs uppercase'>Powered by&nbsp;</span><span className='text-lg font-semibold'>{process.env.APP_NAME}</span>
        </Link>
      </div>       
    </body>
      
    </>
  )
}

export default UserPage