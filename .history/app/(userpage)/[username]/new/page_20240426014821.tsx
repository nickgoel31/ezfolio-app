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
import { Crown, Diamond, FolderKanban, Gem, LucideDiamond } from 'lucide-react';
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

const WebsiteLikePage = async ({params}:{params:{username:string}}) => {

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

  const hasSocialLinks = userPage.githubUrl || userPage.linkedinUrl || userPage.instagramUrl;

  const fontWeight = userPage.fontWeight || 400;

  return (
    <main>
        <nav className='flex space-x-4 bg-red-500 p-3 flex items-center justify-center'>
            <Link href={`/${username}`}>Home</Link>
            <Link href={`/${username}/projects`}>Projects</Link>
        </nav>
        <section className='w-full h-[90vh] flex flex-col items-center justify-center space-y-4'>
            <h1>{title}</h1>
            <p>{bio}</p>
            <Avatar className='h-14 w-14'>
            {userPage.pagePicUrl ? (
              <AvatarImage src={userPage.pagePicUrl} alt='Page pic' width={100} height={100} />
            ):(
              <AvatarFallback className='uppercase text-xl'>{title.charAt(0)}</AvatarFallback>
            )}
            
            </Avatar>
        </section>
    </main>
  )
}

export default WebsiteLikePage