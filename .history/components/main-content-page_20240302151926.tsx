"use client"

import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import Link from 'next/link'
import { EyeIcon, FolderKanban, Hand } from 'lucide-react'
import { ColorSchemeType, ExperienceType, ProjectType, UserPageType } from '@/types'
import { cn } from '@/lib/utils'
import { formatDate } from '@/helpers/format-date'

interface Props {
    projects: ProjectType[],
    colorScheme: ColorSchemeType,
    userPage: UserPageType,
    exps: ExperienceType[]
}

const MainContentPage = ({projects,colorScheme,userPage, exps}:Props) => {

    const [isProjectStateOn,SetIsProjectStateOn] = useState(false)
    const [isSkillStateOn,SetIsSkillStateOn] = useState(false)
    const [isExpStateOn,SetIsExpStateOn] = useState(false)

    const fontWeight = userPage.fontWeight || 400;

  return (
    <div className='w-full space-y-3'>
        <div className='w-full grid grid-cols-3 gap-4'>
          {projects.length > 0 && (
            <div onClick={() => {SetIsSkillStateOn(false); SetIsProjectStateOn(!isProjectStateOn); SetIsExpStateOn(false)}} className={cn('p-4 rounded-lg shadow-sm flex flex-col items-center justify-center gap-2 cursor-pointer', isProjectStateOn && "outline outline-2 outline-offset-2")} style={{backgroundColor:`${colorScheme.cardColor}`, color:`${colorScheme.cardFgColor}`, fontWeight:`${fontWeight-100}`}}>
              <FolderKanban />
              <p className='text-sm'>Projects</p>
            </div>
          )}

          {exps.length > 0 && (
            <div onClick={() => {SetIsSkillStateOn(false); SetIsProjectStateOn(false); SetIsExpStateOn(!isExpStateOn)}} className={cn('p-4 rounded-lg shadow-sm flex flex-col items-center justify-center gap-2 cursor-pointer', isExpStateOn && "outline outline-2 outline-offset-2")} style={{backgroundColor:`${colorScheme.cardColor}`, color:`${colorScheme.cardFgColor}`, fontWeight:`${fontWeight-100}`}}>
              <EyeIcon />
              <p className='text-sm'>Experience</p>
            </div>
          )}

          {userPage.skills.length > 0 && (
            <div onClick={() => {SetIsSkillStateOn(!isSkillStateOn); SetIsProjectStateOn(false); SetIsExpStateOn(false)}} className={cn('p-4 rounded-lg shadow-sm flex flex-col items-center justify-center gap-2 cursor-pointer', isSkillStateOn && "outline outline-2 outline-offset-2")} style={{backgroundColor:`${colorScheme.cardColor}`, color:`${colorScheme.cardFgColor}`, fontWeight:`${fontWeight-100}`}}>
              <Hand />
              <p className='text-sm'>Skills</p>
            </div>
          )}

        </div>

        {isSkillStateOn && (
          <div className='w-full'>
            <div className='w-full space-y-3'>
              <h1 className={cn(' text-sm')} style={{color: `${colorScheme.fgColor}`, fontWeight:`${fontWeight}`}}>Skills</h1>
              {userPage.skills.length > 0 && (
                <div className='w-full flex flex-row flex-wrap gap-3 items-center'>
                  {userPage.skills.map((skill,index) => (
                    <div key={index} className='p-3 rounded-lg text-sm font-medium' style={{backgroundColor:`${colorScheme.cardColor}`, color:`${colorScheme.cardFgColor}`}}>
                      {skill}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}


        {isExpStateOn && (
          <div className='w-full'>
            <div className='w-full space-y-3'>
              <h1 className={cn('text-sm')} style={{color: `${colorScheme.fgColor}`, fontWeight:`${fontWeight}`}}>Experience</h1>
              {exps.length > 0 && (
                <div className='w-full flex flex-col gap-3 items-center'>
                  {exps.map((exp,index) => {

                    const durationOutput = formatDate(exp.startDate, exp.endDate)
                    
                    return (
                    <div key={index} className='p-4 w-full rounded-lg text-sm font-medium space-y-1' style={{backgroundColor:`${colorScheme.cardColor}`, color:`${colorScheme.cardFgColor}`}}>
                      <div className='flex items-center w-full justify-between'>
                        <h4 className='font-semibold'>{exp.jobTitle}</h4>
                        <h4 className='font-semibold text-xs'>{durationOutput}</h4>
                      </div>
                      <h6 className='font-semibold text-xs opacity-80'>{exp.jobOrg}</h6>
                      <p className='font-medium text-xs opacity-70'>{exp.jobDesc}</p>
                    </div>
                  )})}
                </div>
              )}
            </div>
          </div>
        )}


          {isProjectStateOn && (
            <div className='w-full'>
              {/* PROJECTS */}
              {projects.length > 0 && (
                <div className='w-full space-y-3'>
                  <h1 className={cn('text-sm')} style={{color: `${colorScheme.fgColor}`, fontWeight:`${fontWeight}`}}>Projects</h1>
                  {projects.map((project) => (
                    <Accordion key={project.id} type='single' collapsible>
                      <AccordionItem value={project.id} className={cn('shadow-sm rounded w-full px-4 text-sm ')} style={{color: `${colorScheme.cardFgColor}`, backgroundColor:`${colorScheme.cardColor}`,fontWeight:`${fontWeight-200}`}}>
                        <AccordionTrigger className='hover:no-underline' style={{fontWeight:`${fontWeight-100}`}}>{project.projectTitle}</AccordionTrigger>
                        <AccordionContent>
                          <div className=''>
                            <p className='text-sm opacity-60' style={{color: `${colorScheme.cardFgColor}`}}>{project.projectDesc}</p>
                            <div className='w-full flex items-center justify-end mt-3'>
                              <Link href={project.projectUrl} target='_blank' className='p-2 px-3 font-medium text-xs rounded hover:opacity-80 transition' style={{backgroundColor:`${colorScheme.buttonBgColor}`, color: `${colorScheme.buttonFgColor}`}}>
                                View Project
                              </Link>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              )}
            </div>
          )}
    </div>
  )
}

export default MainContentPage