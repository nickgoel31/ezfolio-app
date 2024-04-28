"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { ProjectType } from '@/types'
import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { DialogClose } from "@/components/ui/dialog"
import { format, isValid } from "date-fns"
import { editProjectInDB } from "@/actions/projects/edit-project"
import { createNewProjectInDB } from "@/actions/projects/create-project"
import { createExperienceInDB } from "@/actions/experience/create-experience"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog"

const newExperienceSchema = z.object({
    jobTitle: z.string().min(2).max(50),
    jobDesc: z.string().max(256),
    jobOrg: z.string().max(50).min(1),
    startDate: z.date(),
    endDate: z.date().optional()
})

const NewExperienceForm = ({userPageId,onExpAdded}:{userPageId:string,onExpAdded: (exp: ExperienceType | undefined) => void;}) => {

    const [currentlyWorking, setCurrentlyWorking] = useState(false)
    const [startDate, setStartDate] = React.useState<Date>()
    const [endDate, setEndDate] = React.useState<Date>()

    const [exp, setExp] = useState<ExperienceType | undefined>()

    const form = useForm<z.infer<typeof newExperienceSchema>>({
        resolver: zodResolver(newExperienceSchema),
        defaultValues: {
          jobTitle:"",
          jobDesc:"",
          jobOrg:"",
          startDate: new Date(),
          endDate: new Date()
        },
    })

    const {isValid} = form.formState
     
      // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof newExperienceSchema>) {
        if(!startDate) values.startDate=new Date();
        else{
            values.startDate = startDate;
        }
        if(!currentlyWorking) values.endDate = endDate;
        else if(currentlyWorking) values.endDate = undefined;
        createExperienceInDB(values, userPageId)
        .then((d) => {
          
        })
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Job Title" {...field} className="bg-foreground/5" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobOrg"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Organization Name" className="bg-foreground/5" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobDesc"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="How was the work there? " className="max-h-40 bg-foreground/5" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
            <div className="flex items-center gap-3 w-full pt-2">
                <div className="space-y-2 flex flex-col w-full">
                    <Label>Start date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                            variant={"outline"}
                            className={cn(
                                "w-full justify-start text-left font-normal bg-foreground/5",
                                !startDate && "text-muted-foreground"
                            )}
                            >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                            mode="single"
                            selected={startDate}
                            onSelect={setStartDate}
                            initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                {currentlyWorking && (
                    <div className="space-y-2 flex flex-col w-full">
                        <Label>End date</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal bg-foreground/5",
                                    !endDate && "text-muted-foreground"
                                )}
                                >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                mode="single"
                                selected={endDate}
                                onSelect={setEndDate}
                                initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                )}
            </div>

            <Button onClick={() => setCurrentlyWorking(!currentlyWorking)} className="p-0" type="button" variant={"link"}>
                {currentlyWorking ? `Currently working there?` : `Completed the job?`}
            </Button>
            
        </div>
        
        <AlertDialogCancel>
          Cancel
        </AlertDialogCancel>
        
        <AlertDialogAction type="submit" disabled={!isValid} className="ml-3">
          Create
        </AlertDialogAction>
      </form>
    </Form>
  )
}

export default NewExperienceForm