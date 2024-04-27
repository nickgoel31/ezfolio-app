import { Button } from '@/components/ui/button'
import { Project } from '@prisma/client'
import React from 'react'

const QuickActionSection = ({projects}:{projects:Project[]}) => {
  return (
    <div className='py-2 space-y-3'>
        <h3 className='font-semibold'>Manage Projects</h3>

        <div className='grid grid-cols-4 gap-4'>
            {projects.slice(0,3).map((project) => (
                <div key={project.id} className='border shadow-sm rounded-xl space-y-1 p-4 bg-background'>
                    <h4 className='font-medium'>{project.projectTitle}</h4>
                    <p className='text-muted-foreground text-xs line-clamp-2'>{project.projectDesc}</p>

                    <div className='flex gap-4'>
                        <Button >Edit</Button>
                        <Button className='' variant={"outline"} size={"sm"}>Visit</Button>
                    </div>
                </div> 
            ))}


        </div>
    </div>
  )
}

export default QuickActionSection