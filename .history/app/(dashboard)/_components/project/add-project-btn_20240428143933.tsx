import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import NewProjectForm from './new-project-form'
import { ProjectStateType, ProjectType } from '@/types'

const AddProjectBtn = ({userPageId,onProjectAdded}:{userPageId:string,onProjectAdded: (project: ProjectStateType) => void;}) => {
  return (
    <Dialog>
        <DialogTrigger>
            <Button variant={"outline"}>+ Add</Button>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Add a new project
                </DialogTitle>
                <DialogDescription>
                    Enter the details of your new project.
                </DialogDescription>
            </DialogHeader>

            <NewProjectForm userPageId={userPageId} onProjectAdded={handleProjectAdded}/>
        </DialogContent>
    </Dialog>
  )
}

export default AddProjectBtn