"use client"

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React, { useState } from 'react'
import { z } from "zod"
 
import { Button } from "@/components/ui/button"

import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AwardResume, EducationResume } from '@/types'


const AwardAddBtn = ({onAwardAdd}:{onAwardAdd: (award: AwardResume) => void}) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState<Date | null>(new Date())
    const [issuingOrg, setIssuingOrg] = useState("")

    const handleAddAward = {}{}


  return (
    <Dialog>
        <DialogTrigger>
            <div className="add-btn rounded border p-3  text-sm font-semibold flex items-center justify-center">
                + Add
            </div>
        </DialogTrigger>

        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add Experience</DialogTitle>
                <DialogDescription>
                    Add your work experience, internships, etc.
                </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col items-center gap-3 w-full">
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="" className='font-medium text-sm'>Degree</label>
                    <Input type="text" placeholder='e.g., Software Engineer Intern' onChange={(e) => setDegree(e.target.value)} />
                </div>
                <div className='flex flex-col gap-1 w-full'>
                    <label htmlFor="" className='font-medium text-sm'>School / Institute</label>
                    <Input type="text" placeholder='e.g., Software Engineer Intern' onChange={(e) => setInstitution(e.target.value)}/>
                </div>
                
                <div className='flex items-center gap-3 w-full'>
                <div className='flex items-center gap-3 w-full'>
                    <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="" className='font-medium text-sm'>Start Date</label>
                        <DatePicker selected={startDate} className='border rounded p-1 w-full px-3' onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <label htmlFor="" className='font-medium text-sm'>End Date</label>
                        <DatePicker selected={endDate} className='border rounded p-1 w-full px-3' onChange={(date) => setEndDate(date)} />
                    </div>
                </div>
                </div>
                <div className='flex w-full justify-end'>
                    <DialogClose>
                        <Button onClick={handleAddEducation}>Add</Button>
                    </DialogClose>
                </div>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default AwardAddBtn