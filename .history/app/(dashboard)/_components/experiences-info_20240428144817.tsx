"use client"

import { ExperienceType } from '@/types'
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { deleteExperienceInDB } from '@/actions/experience/delete-exp'
import { useRouter } from 'next/navigation'
import { formatDate } from '@/helpers/format-date'
import AddExpBtn from './exp/add-exp-btn'

const ExperiencesInfo = ({exps,userPageId}:{exps:ExperienceType[], userPageId:string}) => {

    const [experiences, setExperiences] = useState<ExperienceType[] | []>(exps)
    const router = useRouter()

    useEffect(() => {
        setExperiences(exps)
    },[exps])

    const handleExperienceAdded = (newExp:ExperienceType | undefined) => {
        if(newExp){
            
        }
    };

    const handleExperienceDelete = (expId:string) => {
        setExperiences(experiences.filter(exp => exp.id !== expId))
        deleteExperienceInDB(expId)
        
    }

  return (
    <div className='w-full flex flex-col space-y-4'>
        <div className='space-y-1 flex items-center justify-between w-full'>
            <h5 className='text-xl font-semibold'>Your Experience</h5>
            <AddExpBtn userPageId={userPageId}/>
        </div>

        {experiences.length <= 0 ? (
            <p className='text-sm font-medium text-muted-foreground'>No Experiences added!</p>
        ) : (

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
                {experiences.map((exp) => { 
                    
                    const durationOutput = formatDate(exp.startDate, exp.endDate)
                    
                    return (
                    <div key={exp.id} className='border shadow-sm rounded-xl p-5 bg-background w-full flex flex-col items-center justify-center space-y-1 text-center relative'>

                        <h4 className='font-medium '>{exp.jobTitle}</h4>
                        <p className='line-clamp-2 text-muted-foreground font-medium text-sm '>{exp.jobOrg}</p>
                        <p className='text-sm text-muted-foreground font-medium'>{`${durationOutput}`}</p>

                        <div className='flex items-center justify-center gap-2 w-full pt-2'>
                            <Dialog>
                                <DialogTrigger className='w-full'>
                                    <Button variant={"default"} className='w-full' size={"sm"}>
                                        Edit
                                    </Button>
                                </DialogTrigger>

                                <DialogContent>
                                    <DialogHeader>
                                        <DialogTitle>Edit Experience</DialogTitle>
                                        <DialogDescription>
                                            Please fill out the form to edit your experience.
                                        </DialogDescription>
                                    </DialogHeader>

                                    {/* <EditExpForm exp={exp}/> */}
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
                                            <Button onClick={() => handleExperienceDelete(exp.id)} variant={"destructive"}>Delete</Button>
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    </div>
                )})}
            </div>

        )}
    </div>
  )
}

export default ExperiencesInfo