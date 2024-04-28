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
import { isValid } from "date-fns"
import { editProjectInDB } from "@/actions/projects/edit-project"
import { createNewProjectInDB } from "@/actions/projects/create-project"

const newProjectSchema = z.object({
    projectTitle: z.string().max(40).min(1),
    projectDesc:z.string().max(256),
    projectUrl: z.string().url()
})



const NewProjectForm = ({ userPageId, onProjectAdded }: { userPageId: string; onProjectAdded: (project: ProjectType) => void }) => {

  const [project,setProject] = useState<ProjectType | undefined>()

    const form = useForm<z.infer<typeof newProjectSchema>>({
        resolver: zodResolver(newProjectSchema),
        defaultValues: {
          projectDesc: "",
          projectTitle:"",
          projectUrl:"" 
        },
    })

    const {isValid} = form.formState
     
      // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof newProjectSchema>) {
        createNewProjectInDB(values,userPageId)
        .then()

    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="projectTitle"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Project Title" {...field} className="bg-foreground/5" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectDesc"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="describe your project..." className="max-h-40 bg-foreground/5" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectUrl"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Project Url" className="bg-foreground/5" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose disabled={!isValid}>
            <Button type="submit">Create</Button>
        </DialogClose>
      </form>
    </Form>
  )
}

export default NewProjectForm