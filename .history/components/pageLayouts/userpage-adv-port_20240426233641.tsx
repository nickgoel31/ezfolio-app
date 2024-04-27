import { ColorScheme, Experience, Project, UserPage } from '@prisma/client'
import React from 'react'

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
    
}

const UserpageAdvancedPortfolioPage = ({userPage,title,bio,id,projects,experiences,skills,colorScheme,currentFont, pageLayout, hasSocialLinks, fontWeight, vipTag,uniqueTag}:Props) => {
  return (
    <div>UserpageAdvancedPortfolioPage</div>
  )
}

export default UserpageAdvancedPortfolioPage