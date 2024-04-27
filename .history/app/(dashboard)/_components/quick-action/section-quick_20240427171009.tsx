"use client"

import { Button } from '@/components/ui/button'
import { Project } from '@prisma/client'
import Link from 'next/link'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import EditProjectForm from '../project/edit-project-form'
import { FolderGit2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

const QuickActionSection = ({projects}:{projects:Project[]}) => {
    const router = useRouter();
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
                            <Dialog>
                                <DialogTrigger className=''>
                                    <Button variant={"default"} className='w-full' size={"sm"}>
                                        Edit
                                    </Button>
                                </DialogTrigger>

                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Edit project</DialogTitle>
                                        <DialogDescription>
                                            Fill out the form to edit your project information.
                                        </DialogDescription>
                                    </DialogHeader>

                                    <EditProjectForm project={project}/>
                                </DialogContent>
                            </Dialog>
                        
                        <Link href={project.projectUrl} target='_blank'>
                            <Button className='' variant={"outline"} size={"sm"}>Visit</Button>
                        </Link>
                    </div>
                </div> 
            ))}

            <Link href={`${router.push}/info#project-info-dashboard`} className='border shadow-sm rounded-xl items-center space-y-3 p-4 bg-background justify-center flex flex-col font-medium'>
                <FolderGit2 className='opacity-70'/>
                Manage Projects
            </Link>




        </div>
    </div>
  )
}

export default QuickActionSection