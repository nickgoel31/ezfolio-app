"use client"

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React, { useState } from 'react'
import { z } from "zod"
 
import { Button } from "@/components/ui/button"

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AwardResume, EducationResume, ProjectResume } from '@/types'


const ProjectAddBtn = ({onProjectAdd}:{onProjectAdd: (project: ProjectResume) => void}) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [deployUrl, setDeployUrl] = useState("")
    const [githubUrl, setGithubUrl] = useState("")

    const handleAddProject = () => {
        const project = {
            title,
            description: description,
            deployUrl,
            githubUrl
        };
        onProjectAdd(project); // Call the function passed from the parent with the experience object
    }


  return (
    <Dialog>
        <DialogTrigger>
            <div className="add-btn rounded border p-3  text-sm font-semibold flex items-center justify-center">
                + Add
            </div>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add Project</DialogTitle>
                <DialogDescription>
                    Add your awards, etc.
                </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col items-center gap-3 w-full">
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="" className='font-medium text-sm'>Award Title</label>
                    <Input type="text" placeholder='e.g., Volunteer' onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="" className='font-medium text-sm'>Description</label>
                    <Textarea placeholder='Type here...' onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <div className='flex items-center gap-3 w-full'>
                    <div className='flex items-center gap-3 w-full'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label htmlFor="" className='font-medium text-sm'>Issued on</label>
                            <DatePicker selected={date} className='border rounded p-1 w-full px-3' onChange={(date) => setDate(date)} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="" className='font-medium text-sm'>Issuing Organization</label>
                    <Input type="text" placeholder='e.g., Your School' onChange={(e) => setIssuingOrg(e.target.value)} />
                </div>
                <div className='flex w-full justify-end'>
                    <DialogClose>
                        <Button onClick={handleAddAward}>Add</Button>
                    </DialogClose>
                </div>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default ProjectAddBtn