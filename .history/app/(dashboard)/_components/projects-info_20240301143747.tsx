"use client"

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { ProjectType } from '@/types'
import { MoreVertical } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { DeleteProjectInDB } from '@/actions/projects/delete-project'
import AddProjectBtn from './project/add-project-btn'
import EditProjectForm from './project/edit-project-form'

const ProjectsInfo = ({projects,userPageId}:{projects:ProjectType[], userPageId:string}) => {

    const [projectsState,setProjectsState] = useState<ProjectType[]>(projects)

    const handleProjectDelete = (id:string) => {
        DeleteProjectInDB(id)
    }

  return (
    <div className='w-full flex flex-col space-y-4'>
        <div className='space-y-1 flex items-center justify-between w-full'>
            <h5 className='text-xl font-semibold'>Your Projects</h5>
            <AddProjectBtn userPageId={userPageId}/>
        </div>

        {projectsState.length <= 0 ? (
            <p className='text-sm font-medium text-muted-foreground'>No projects created!</p>
        ) : (

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
                {projectsState.map((project) => (
                    <div key={project.id} className='border shadow-sm rounded-xl p-5 bg-background w-full flex flex-col items-center justify-center space-y-1 text-center relative'>

                        <h4 className='font-medium '>{project.projectTitle}</h4>
                        <p className='line-clamp-2 text-muted-foreground font-medium text-sm '>{project.projectDesc}</p>

                        <div className='flex items-center justify-center gap-2 w-full pt-2'>
                            <Dialog>
                                <DialogTrigger className='w-full'>
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


                            <AlertDialog>
                                <AlertDialogTrigger>
                                    <Button  variant={"destructive"} className='' size={"sm"}>
                                        Delete
                                    </Button>
                                </AlertDialogTrigger>

                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction className='bg-background p-0'>
                                            <Button onClick={() => handleProjectDelete(project.id)} variant={"destructive"}>Delete</Button>
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                ))}
            </div>

        )}

    </div>
  )
}

export default ProjectsInfo