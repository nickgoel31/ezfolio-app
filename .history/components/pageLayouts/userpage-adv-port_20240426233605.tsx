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

const UserpageAdvancedPortfolioPage = () => {
  return (
    <div>UserpageAdvancedPortfolioPage</div>
  )
}

export default UserpageAdvancedPortfolioPage