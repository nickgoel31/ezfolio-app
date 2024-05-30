"use client"

import { Input } from '@/components/ui/input'
import { SendIcon, Trash2, Trash2Icon } from 'lucide-react';
import React, { useRef, useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa';

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

import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { onBoardingSchema } from '@/form-schemas';
import { Textarea } from '@/components/ui/textarea';
import { bioSuggestions } from '@/data/create-page';
import { ProjectStateType } from '@/types';


const sectionReference = {
    1: "Introduction",
    2: "Page Setup",
    3: "Name",
    4: "Bio",
    5: "Projects",
    6: "Else Option",
    7: "Page Pic",
    8: "Experience",
    9: "Skills",
    10: "Appearance"
}

const OnBoardingAI = () => {

    const [currentSection,setCurrentSection] = useState<number>(5);
    const [userDetails, setUserDetails] = useState<z.infer<typeof onBoardingSchema>>({
        pageBio:"",
        pageTitle:"",
    })

    const [pageTitle,setPageTitle] = useState<string>("")

    const [projects, setProjects] = useState<ProjectStateType[]>([])
    const [projectTitle, setprojectTitle] = useState<string | "">("")
    const [projectDesc, setprojectDesc] = useState<string | "">("")
    const [projectUrl, setprojectUrl] = useState<string | "">("")

    if(currentSection===1){
        setTimeout(() => {
            setCurrentSection(2);
        }, 3000);
    }
    if(currentSection===2){
        setTimeout(() => {
            setCurrentSection(3);
        }, 3000);
    }

    const section3Submit = () => {
        setUserDetails({pageTitle:pageTitle, pageBio:""})
        setCurrentSection(4)
    }

    const section4Submit = () => {
        if(bioRef.current){
            setUserDetails({pageTitle:pageTitle, pageBio:bioRef.current.value})
        }
        setCurrentSection(5)
    }

    const section5Submit = () => {
        if(bioRef.current){
            setUserDetails({pageTitle:pageTitle, pageBio:bioRef.current.value})
        }
        setCurrentSection(6)
    }



    const form = useForm<z.infer<typeof onBoardingSchema>>({
        resolver: zodResolver(onBoardingSchema),
        defaultValues: {
          pageBio:"",
          pageTitle:"",
        },
    })

    const isNotValid = projectTitle === ""
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof onBoardingSchema>) {
        // createUserPageInDB(values,projects,username,imageUrl)
        // router.push("/d/redirect")
      }

    const firstName = userDetails.pageTitle.split(" ")[0]

    const bioRef = useRef<HTMLTextAreaElement | null>(null)

    const updateBio = (suggestion:string) => {
        if(bioRef.current) {
            bioRef.current.value = suggestion
        }
    }


    function handleAddProject () {
        const newProject:ProjectStateType = {
            title: projectTitle,
            desc: projectDesc,
            url: projectUrl
        }
        setProjects((prevProjects) => [...prevProjects, newProject])
        setprojectTitle("")
        setprojectDesc("")
        setprojectUrl("")
    }
    function handleDeleteProject (title:string) {
        const filteredProjects:ProjectStateType[] = projects.filter(project => project.title !== title )
        setProjects(filteredProjects)
    }



  return (
    <div className='w-full h-full relative flex items-center justify-center max-w-screen-md mx-auto'>

        {currentSection === 1 && <div className='Message 1 leading-normal text-center font-poppins animate-fade-in'>
            <h1 className='font-semibold text-5xl leading-normal'>Hi! I'm <span className='text-violet-400'>Ez</span>Buddy</h1>
            <h1 className='font-semibold text-5xl'>Your personal Assistant</h1>
        </div>}

        {currentSection === 2 && <div className='Message 1 leading-normal text-center font-poppins animate-fade-in'>
            <h1 className='font-semibold text-5xl leading-normal'>Let's set up your page</h1>
            
        </div>}

        {currentSection === 3 && <div className='Message 1 leading-normal text-center font-poppins animate-fade-in'>
            <h1 className='font-semibold text-5xl leading-normal'>To start things off</h1>
            <h1 className='font-semibold text-5xl leading-normal'>What can I call you?</h1>
            
            <div className='relative'>
                <Input className='mt-8 bg-foreground/[0.05]' placeholder='Enter your name here' onChange={(e) => setPageTitle(e.target.value)}/>
                <button className='absolute right-0 top-0 h-full px-4 py-2 bg-violet-500 text-white font-semibold rounded-tr-lg rounded-br-lg' onClick={section3Submit}>
                    <FaPaperPlane />
                </button>
            </div>
            
        </div>}

        {currentSection === 4 && <div className='Message 1 leading-normal text-center font-poppins animate-fade-in'>
            <h1 className='font-semibold text-5xl leading-normal'>Now, let's write your bio</h1>

            <div>
                <Textarea ref={bioRef} className='mt-8 bg-foreground/[0.05] max-h-64 h-48' placeholder='Write about what you like, occupation, anything catchy...' />
            </div>

            <div className='w-full gap-4  mt-6 grid grid-cols-2 lg:grid-cols-4 items-start '>
                {bioSuggestions.map((sug) => (
                    <div key={sug.id} className='rounded-lg border border-muted bg-foreground/[0.05] p-2 w-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/80 cursor-pointer' onClick={() => updateBio(sug.suggestion)}>
                        Template {sug.id}
                    </div>
                ))}
            </div>

            <Button className='w-full mt-6' onClick={section4Submit}>Next</Button>
            
        </div>}

        {currentSection === 5 && <div className='Message 1 leading-normal text-center font-poppins animate-fade-in w-full'>
            <h1 className='font-semibold text-3xl leading-normal'>Any projects that you'd like<br />to add in your portfolio?</h1>
            
            <div className='mt-6 w-full'>
            <div className="flex flex-col w-full items-center justify-center gap-3">
                        
                        {projects.map((project,index) => (
                            <div key={index} className="p-3 px-4 border rounded cursor-pointer hover:bg-foreground/10 transition font-medium text-sm flex items-center gap-4 w-full max-w-screen-sm justify-between">
                                {project.title}
                                <div onClick={() => {handleDeleteProject(project.title)}} className="p-1 rounded-full hover:bg-red-400/10 transition">
                                    <Trash2Icon size={16} className="text-red-500"/>
                                </div>
                            </div>
                        ))}

                        {projects.length === 0 && (
                            <div>
                                <h5 className="font-medium text-sm text-muted-foreground">No projects added yet</h5>
                            </div>
                        )}


                        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-4'>
                            <Dialog>
                            <DialogTrigger className=''>
                                <div className=" p-3 px-4 border rounded cursor-pointer hover:bg-foreground/10 transition font-medium text-sm flex items-center gap-4 bg-foreground/[0.05] justify-between">
                                    <h5 className="font-medium text-sm">+ Add Projects</h5>
                                </div>
                            </DialogTrigger>

                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Add a project to your Ezfolio</DialogTitle>
                                    <DialogDescription>
                                        Tell the world what you&apos;ve been working on!
                                    </DialogDescription>
                                </DialogHeader>

                                <form className="space-y-3">
                                    <Input placeholder="Project Title" className="bg-foreground/10" onChange={(e) => setprojectTitle(e.target.value)}/>
                                    <Textarea placeholder="Project Description" className="bg-foreground/10 max-h-40"  onChange={(e) => setprojectDesc(e.target.value)}/>
                                    <Input placeholder="Project Url (optional)" className="bg-foreground/10"  onChange={(e) => setprojectUrl(e.target.value)}/>

                                    <div className="flex w-full items-center justify-end">
                                        <DialogClose disabled={isNotValid}>
                                            <Button type="button" disabled={isNotValid} onClick={handleAddProject}>Add</Button>
                                        </DialogClose>
                                    </div>
                                </form>
                            </DialogContent>
                            </Dialog>

                            {projects.length >= 1 && <div className=" p-3 px-4 border rounded cursor-pointer hover:bg-foreground/60 transition font-medium text-sm flex items-center gap-4 bg-foreground/[0.9] text-background justify-between" onClick={section5Submit}>
                                <h5 className="font-medium text-sm">That's it!</h5>
                            </div>}

                            {projects.length === 0 && <div className=" p-3 px-4 border rounded cursor-pointer hover:bg-foreground/10 transition font-medium text-sm flex items-center gap-4 bg-foreground/[0.05] justify-between" onClick={section5Submit}>
                                <h5 className="font-medium text-sm">Skip Adding</h5>
                            </div>}

                            
                        </div>
                    </div>
            </div>
        </div>}

        {currentSection === 6 && <div className='Message 1 leading-normal text-center font-poppins animate-fade-in'>
            <h1 className='font-semibold text-4xl leading-normal'>Great! What else would <br />you like to add?</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
            <div className=" p-3 px-4 border rounded cursor-pointer hover:bg-foreground/10 transition font-medium text-sm flex items-center gap-4 bg-foreground/[0.05] justify-between" onClick={section5Submit}>
                                <h5 className="font-medium text-sm">Skip Adding</h5>
                            </div>
            </div>
            
        </div>}

        {/* AI INPUT TEXT FIELD */}
        {/* <div className='absolute bottom-0 left-1/2 -translate-x-1/2  w-full max-w-screen-md rounded-lg'>
            <Input className='w-full h-full bg-foreground/[0.08]' placeholder='Type your message here...'/>
        </div> */}
    </div>
  )
}

export default OnBoardingAI