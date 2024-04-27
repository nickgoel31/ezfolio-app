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
import { getLayoutOfUserPage } from '@/actions/pagelayout/get-layout';
import UserpageLayoutTwo from '@/components/pageLayouts/userpage-layout-2';
import UserpageLayoutOne from '@/components/pageLayouts/userpage-layout-1';


const UserPage = async ({params}:{params:{username:string}}) => {

  const {username} = params;
  if(!username) return;
  const userPage = await getUserpageByUserId(username)

  if(!userPage) return (
    <NoUserPageFound userName={username}/>
  );

  const {title,bio,id,skills} = userPage

  const projects = await getProjectByUserPageId(id)
  const experiences = await getExperienceByUserPageId(id)

  const colorScheme = await getColorSchemeOfUserPage(userPage.colorSchemeId)
  if(!colorScheme) return <div>Loading</div>

  const currentFont = await getFontOfUserPage(userPage.fontId)
  if(!currentFont) return <div>Loading</div>

  const pageLayout = await getLayoutOfUserPage(userPage.layoutId)
  if(!pageLayout) return <div>Loading</div>

  const hasSocialLinks = userPage.githubUrl || userPage.linkedinUrl || userPage.instagramUrl;

  const isAdvancedPortfolioToggled = userPage.isAdvancedPortfolio;

  const fontWeight = userPage.fontWeight || 400;

  const vipTag = vipNames.includes(username) ? true : false;
  const uniqueTag = uniqueNames.includes(username) ? true : false;


  const props = {
    userPage,
    title,
    bio,
    id,
    skills,
    projects,
    experiences,
    colorScheme,
    currentFont,
    pageLayout,
    hasSocialLinks,
    fontWeight,
    vipTag,
    uniqueTag,
  };


  return (
    <>
    {isAdvancedPortfolioToggled ? (
      
    ):(
      {pageLayout.id === 1 && (
        <UserpageLayoutOne {...props}/>
      )}
    )}
    
    </>
  )
}

export default UserPage