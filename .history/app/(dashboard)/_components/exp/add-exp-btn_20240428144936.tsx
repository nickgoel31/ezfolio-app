"use client"

import { Button } from '@/components/ui/button'
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import React from 'react'
import NewExperienceForm from './new-exp-form'

const AddExpBtn = ({userPageId,onExpAdded}:{userPageId:string, onExpAdded: }) => {
  return (
    <AlertDialog>
        <AlertDialogTrigger>
            <Button variant={"outline"}>+ Add</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    Add a new experience
                </AlertDialogTitle>
                <AlertDialogDescription>
                    Fill out the form to add an experience.
                </AlertDialogDescription>
            </AlertDialogHeader>

            <NewExperienceForm userPageId={userPageId}/>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default AddExpBtn