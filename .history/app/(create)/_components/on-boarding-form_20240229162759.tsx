"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

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
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Trash2 } from "lucide-react"
import { redirect, useRouter } from "next/navigation"
import { ProjectStateType } from "@/types"
import { onBoardingSchema } from "@/form-schemas"
import { createUserPageInDB } from "@/actions/userpage/create-userpage"
import CreateFormImageUpload from "./image-upload"


 


const OnBoardingForm = ({username}:{username:string}) => {

    const [isFirstSection,setIsFirstSection] = useState(true)
    const [isSecondSection,setIsSecondSection] = useState(false)
    const [isThirdSection,setIsThirdSection] = useState(false)

    const [projects, setProjects] = useState<ProjectStateType[]>([])
    const [projectTitle, setprojectTitle] = useState<string | "">("")
    const [projectDesc, setprojectDesc] = useState<string | "">("")
    const [projectUrl, setprojectUrl] = useState<string | "">("")

    const [imageUrl, setImageUrl] = useState<string>("")


    function handleAddProject () {
        const newProject:ProjectStateType = {
            title: projectTitle,
            desc: projectDesc,
            url: projectUrl
        }
        setProjects((prevProjects) => [...prevProjects, newProject])
    }
    function handleDeleteProject (title:string) {
        const filteredProjects:ProjectStateType[] = projects.filter(project => project.title !== title )
        setProjects(filteredProjects)
    }

    const router = useRouter()

    

    const form = useForm<z.infer<typeof onBoardingSchema>>({
        resolver: zodResolver(onBoardingSchema),
        defaultValues: {
          pageBio:"",
          pageTitle:"",
        },
      })

    const {isValid} = form.formState

    const isFormValid = isValid && projects.length > 0;
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof onBoardingSchema>) {
        createUserPageInDB(values,projects,username)
        router.push("/d/redirect")
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-screen-sm mx-auto">

        {isFirstSection && (
            <div className="w-full space-y-4">
                <div>
                    <CreateFormImageUpload />
                </div>

            <FormField
            control={form.control}
            name="pageTitle"
            render={({ field }) => (
                <FormItem>
                {/* <FormLabel>Username</FormLabel> */}
                <FormControl>
                    <Input placeholder="Page Title" className="bg-foreground/10" {...field}/>
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />

            <FormField
            control={form.control}
            name="pageBio"
            render={({ field }) => (
                <FormItem>
                {/* <FormLabel>Username</FormLabel> */}
                <FormControl>
                    <div className=" overflow-hidden relative">
                        {/* <div className="absolute top-0 h-full left-0 flex items-center justify-center px-4 text-muted-foreground text-sm font-medium">Linkin.tech/</div> */}
                        <div className="">
                            <Textarea placeholder="Bio" className=" bg-foreground/10 border max-h-40" {...field} />
                        </div>
                    </div>
                </FormControl>
                
                <FormMessage />
                </FormItem>
            )}
            />


                <div className="flex w-full gap-3 items-center">
                    {/* <Button onClick={() => {
                        setIsFirstSection(true)
                        setIsSecondSection(false)
                        
                    }} type="button" className="w-full flex-[0.5]" variant={"secondary"}>Prev</Button> */}

                    <Button type="button" onClick={() => {
                        setIsFirstSection(false)
                        setIsSecondSection(true)}} className="w-full">Next</Button>
                </div>
            </div>
        )}

        {isSecondSection && (
            <div className="w-full space-y-4">
                <div className="space-y-2">
                    <Label>Projects</Label>
                    <div className="flex items-center gap-2">
                        
                        {projects.map((project,index) => (
                            <div key={index} className="p-3 px-4 border rounded cursor-pointer hover:bg-foreground/10 transition font-medium text-sm flex items-center gap-4">
                                {project.title}
                                <div onClick={() => handleDeleteProject(project.title)} className="p-1 rounded-full hover:bg-red-400/10 transition">
                                    <Trash2 size={16} className="text-red-500"/>
                                </div>
                            </div>
                        ))}


                        <Dialog>
                            <DialogTrigger>
                                <div className="p-3 border rounded cursor-pointer hover:bg-foreground/10 transition">
                                    <h5 className="font-medium text-sm">+ Add Projects</h5>
                                </div>
                            </DialogTrigger>

                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add a project to your linkIn</DialogTitle>
                                    <DialogDescription>
                                        Tell the world what you've been working on!
                                    </DialogDescription>
                                </DialogHeader>

                                <form className="space-y-3">
                                    <Input placeholder="Project Title" className="bg-foreground/10" onChange={(e) => setprojectTitle(e.target.value)}/>
                                    <Textarea placeholder="Project Description" className="bg-foreground/10 max-h-40"  onChange={(e) => setprojectDesc(e.target.value)}/>
                                    <Input placeholder="Project Url (optional)" className="bg-foreground/10"  onChange={(e) => setprojectUrl(e.target.value)}/>

                                    <div className="flex w-full items-center justify-end">
                                        <DialogClose>
                                            <Button type="button" onClick={handleAddProject}>Add</Button>
                                        </DialogClose>
                                    </div>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>


            <div className="flex w-full gap-3 items-center">
                    <Button onClick={() => {
                        setIsFirstSection(true)
                        setIsSecondSection(false)
                    }} type="button" className="w-full flex-[0.5]" variant={"secondary"}>Prev</Button>

                    {/* <Button type="button" onClick={() => {
                        setIsFirstSection(false)
                        setIsSecondSection(false)
                        setIsThirdSection(true)}} className="w-full">Next</Button> */}
                    <Button type="submit" disabled={!isValid} className="w-full">Submit</Button>
                </div>
            </div>
        )}

        {/* {isThirdSection && (
            <div className="w-full space-y-4">
            <div className="space-y-2">
                <Label>Experiences</Label>
                <div className="flex items-center gap-2">
                    
                    {experiences.map((experience,index) => (
                        <div key={index} className="p-3 px-4 border rounded cursor-pointer hover:bg-foreground/10 transition font-medium text-sm flex items-center gap-4">
                            {experience.title}
                            <div onClick={() => handleDeleteExperience(experience.title)} className="p-1 rounded-full hover:bg-red-400/10 transition">
                                <Trash2 size={16} className="text-red-500"/>
                            </div>
                        </div>
                    ))}


                    <Dialog>
                        <DialogTrigger>
                            <div className="p-3 border rounded cursor-pointer hover:bg-foreground/10 transition">
                                <h5 className="font-medium text-sm">+ Add Projects</h5>
                            </div>
                        </DialogTrigger>

                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Add a project to your linkIn</DialogTitle>
                                <DialogDescription>
                                    Tell the world what you've been working on!
                                </DialogDescription>
                            </DialogHeader>

                            <form className="space-y-3">
                                <Input placeholder="Project Title" className="bg-foreground/10" onChange={(e) => setprojectTitle(e.target.value)}/>
                                <Textarea placeholder="Project Description" className="bg-foreground/10 max-h-40"  onChange={(e) => setprojectDesc(e.target.value)}/>
                                <Input placeholder="Project Url" className="bg-foreground/10"  onChange={(e) => setprojectUrl(e.target.value)}/>

                                <div className="flex w-full items-center justify-end">
                                    <DialogClose>
                                        <Button onClick={handleAddProject}>Add</Button>
                                    </DialogClose>
                                </div>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>


        <div className="flex w-full gap-3 items-center">
                <Button onClick={() => {
                    setIsFirstSection(true)
                    setIsSecondSection(false)
                }} type="button" className="w-full flex-[0.5]" variant={"secondary"}>Prev</Button>

                <Button type="button" onClick={() => {
                    setIsFirstSection(false)
                    setIsSecondSection(false)
                    setIsThirdSection(true)}} className="w-full">Next</Button>
            </div>
        </div>
        )} */}
      </form>
    </Form>
  )
}

export default OnBoardingForm