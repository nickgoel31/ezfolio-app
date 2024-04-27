import { Button } from '@/components/ui/button'
import { Project } from '@prisma/client'
import Link from 'next/link'
import React from 'react'

const QuickActionSection = ({projects}:{projects:Project[]}) => {
  return (
    <div className='py-2 space-y-3'>
        <h3 className='font-semibold'>Manage Projects</h3>

        <div className='grid grid-cols-4 gap-4'>
            {projects.slice(0,3).map((project) => (
                <div key={project.id} className='border shadow-sm rounded-xl space-y-5 p-4 bg-background justify-between flex flex-col'>
                    <div className='space-y-1'>
                        <h4 className='font-medium'>{project.projectTitle}</h4>
                        <p className='text-muted-foreground text-xs line-clamp-2'>{project.projectDesc}</p>
                    </div>

                    <div className='flex gap-2'>
                        <Button size={"sm"}>Edit</Button>
                        <Link
                    </div>
                </div> 
            ))}


        </div>
    </div>
  )
}

export default QuickActionSection