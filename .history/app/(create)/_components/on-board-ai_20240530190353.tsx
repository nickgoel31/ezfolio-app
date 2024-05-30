"use client"

import { Input } from '@/components/ui/input'
import { Replace, Rocket, SendIcon, Trash2, Trash2Icon } from 'lucide-react';
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

import CreateFormImageUpload from "./image-upload"
import { UploadButton } from "@/utils/uploadthing"
import Image from "next/image"
import { ColorRing } from "react-loader-spinner"
import { createUserPageInDB } from '@/actions/userpage/create-userpage';
import { useRouter } from 'next/navigation';

import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import { popularSkills, softSkills, techSkills } from '@/data/skills'
import { cn } from '@/lib/utils'


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

    const router = useRouter()

    const [currentSection,setCurrentSection] = useState<number>(6);
    const [userDetails, setUserDetails] = useState<z.infer<typeof onBoardingSchema>>({
        pageBio:"",
        pageTitle:"",
    })

    const [pageTitle,setPageTitle] = useState<string>("")

    const [projects, setProjects] = useState<ProjectStateType[]>([])
    const [projectTitle, setprojectTitle] = useState<string | "">("")
    const [projectDesc, setprojectDesc] = useState<string | "">("")
    const [projectUrl, setprojectUrl] = useState<string | "">("")

    const [user,setUser] = useState<string>()
    const [uploading,setUploading] = useState<boolean>(false)
    const [imageUrl, setImageUrl] = useState<string | undefined>("")

    const [skillsArrayState, setSkillsArrayState] = useState<string[] | []>([])
    const [selectedSkills,setSelectedSkills] = useState<string[]>([])

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
      function onSubmit() {
        const values: z.infer<typeof onBoardingSchema> = {pageBio:userDetails.pageBio, pageTitle:userDetails.pageTitle}
        // createUserPageInDB(values,projects,username,imageUrl)
        router.push("/d/redirect")
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

    const handleSelectSkill = (skill:string) => {
        if(selectedSkills.includes(skill)) {
            const filteredSkills = selectedSkills.filter(s => s !== skill)
            setSelectedSkills(filteredSkills)
            return;
        }
        setSelectedSkills(prev => {
            return [...prev, skill];
        });
    }

    const handleAddSkill = () => {
        setSkillsArrayState(selectedSkills)
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
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8'>
                    {!imageUrl && <div className=" p-3 px-4 border rounded cursor-pointer hover:bg-foreground/10 transition font-medium text-sm flex items-center gap-4 bg-foreground/[0.05] justify-center" onClick={() => setCurrentSection(7)}>
                        <h5 className="font-medium text-sm">Profile Picture</h5>
                    </div>}

                    <div className=" p-3 px-4 border rounded cursor-pointer hover:bg-foreground/10 transition font-medium text-sm flex items-center gap-4 bg-foreground/[0.05] justify-center text-center" onClick={() => setCurrentSection(8)}>
                        <h5 className="font-medium text-sm">Experience</h5>
                    </div>

                    <div className=" p-3 px-4 border rounded cursor-pointer hover:bg-foreground/10 transition font-medium text-sm flex items-center gap-4 bg-foreground/[0.05] justify-center text-center" onClick={() => setCurrentSection(9)}>
                        <h5 className="font-medium text-sm">Skills</h5>
                    </div>

                    <div className=" p-3 px-4 border rounded cursor-pointer hover:bg-foreground/10 transition font-medium text-sm flex items-center gap-4 bg-foreground/[0.05] justify-center text-center" onClick={() => setCurrentSection(10)}>
                        <h5 className="font-medium text-sm">Appearance</h5>
                    </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-3 px-4 border rounded cursor-pointer hover:bg-foreground/60 transition font-medium text-sm flex items-center gap-4 bg-foreground/[0.9] text-background justify-between overflow-hidden transition-ez hover:text-foreground group" onClick={onSubmit}>
                    <span className='absolute w-full h-full z-[-1] bg-gradient-to-tr from-violet-500 to-fuchsia-500 left-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-ez opacity-0 group-hover:opacity-100 blur-md'></span>
                    <h5 className="font-medium text-sm flex gap-2 items-center ">Let's Experience ezfolio together! <Rocket /></h5>
                </div>    
        </div>}

        {currentSection === 7 && (
            <div className='Message 1 leading-normal text-center font-poppins animate-fade-in'>
                <h1 className='font-semibold text-4xl leading-normal'>Upload Image</h1>

                <div className='mt-8'>

                <div className="image-upload">
                <div className='w-full p-2 flex items-center justify-center'>
        
        <div className='h-20 w-20 bg-foreground/10 rounded-full overflow-hidden flex items-center justify-center group relative cursor-pointer transition'>
            <span className='bg-black/50 w-full h-full rounded-full absolute flex opacity-0 group-hover:opacity-100 items-center justify-center transition text-xl font-medium z-[7]'>{imageUrl ? <Replace />:`+`}
            </span>
            {!imageUrl && !uploading && <p className='text-xs font-medium group-hover:opacity-0 transition'>Upload</p>}
            {uploading && (
                <div className='absolute w-full h-full z-[11] bg-background flex items-center    justify-center'>
                    <ColorRing
                    visible={true}
                    height="25"
                    width="25"
                    ariaLabel="color-ring-loading"
                    wrapperStyle={{}}
                    wrapperClass="color-ring-wrapper"
                    colors={['#7C3AED', '#7C3AED', '#7C3AED','#7C3AED','#7C3AED']}
                    />
                </div>
            )}

            <UploadButton endpoint={`imageUploader`}
            className="w-full opacity-0 h-full absolute top-0 left-0 cursor-pointer z-[10]"
            appearance={{
                button: `w-full h-full`,
                allowedContent: `hidden`
            }}
            content={{
                button: `Upload Image`,
            }}
            onClientUploadComplete={(res) => {
                setImageUrl(res[0].url)
                setUser(res[0].serverData.uploadedBy)
                setUploading(false)
            }}

            onUploadProgress={() => {
                setUploading(true)
            }}
    
            onUploadError={(error:Error) => {
                console.log(`Error: ${error.message}`)
            }}/>

            {imageUrl && !uploading && (
                <Image src={imageUrl} alt='Image' width={100} height={100} className='absolute w-full h-full top-0 left-0'/>
            )}
        </div>
    </div>
                </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-3 px-4 border rounded cursor-pointer hover:bg-foreground/10 transition font-medium text-sm flex items-center gap-4 bg-foreground/[0.05] justify-between" onClick={() => setCurrentSection(6)}>
                        <h5 className="font-medium text-sm">Back to menu</h5>
                    </div>
                </div>
            
            </div>
        )}

        {currentSection === 8 && (
            <div className='Message 1 leading-normal text-center font-poppins animate-fade-in'>
                <h1 className='font-semibold text-2xl leading-normal'>Add experience in your portfolio<br /></h1>

                {<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8'>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-3 px-4 border rounded cursor-pointer hover:bg-foreground/10 transition font-medium text-sm flex items-center gap-4 bg-foreground/[0.05] justify-between" onClick={() => setCurrentSection(6)}>
                        <h5 className="font-medium text-sm">Back to menu</h5>
                    </div>
                </div>}
            
            </div>
        )}

        {currentSection === 9 && (
            <div className='Message 1 leading-normal text-center font-poppins animate-fade-in'>
                <h1 className='font-semibold text-2xl leading-normal'>What all skills do you have?<br /></h1>

                <div className='flex gap-2 flex-wrap mt-6 items-center '>
                    {skillsArrayState.length <= 0 && <p className='text-center text-muted-foreground text-sm font-medium '>No skills added yet!</p>}
                    {skillsArrayState.map((sk,index) => (
                        <div key={index} className='p-1 px-3 border rounded cursor-pointer hover:bg-foreground/10 transition font-medium flex items-center gap-4 bg-foreground/[0.05] justify-center text-xs'>
                            {sk}
                        </div>
                    ))}
                </div>

                {<div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-3'>
                <Dialog>
                    <DialogTrigger>
                        <div className='border bg-foreground/95 text-background rounded-lg p-3 shadow-sm hover:opacity-80 cursor-pointer transition'>
                            <p className='font-medium text-sm'> Update your skills</p>
                        </div>
                    </DialogTrigger>

                    <DialogContent className=''>
                        <DialogHeader>
                            <DialogTitle>
                                Add a skill
                            </DialogTitle>
                            <DialogDescription>
                                Select the name of your desired skill.
                            </DialogDescription>
                        </DialogHeader>

                        {/* <Input placeholder='Skill name' className='bg-foreground/5' onChange={(e) => setNewSkillName(e.target.value)}/> */}

                        <div className='flex items-start justify-start '>
                            <Command>
                                <CommandInput placeholder="Type a command or search..." />
                                <CommandList className=''>
                                    <CommandEmpty>No results found.</CommandEmpty>
                                    <CommandGroup heading="Suggestions" className=''>
                                    {popularSkills.map((pop,index) => (
                                        <div key={index} className={cn('w-full rounded-md mb-1', selectedSkills.includes(pop) && 'bg-foreground/20')} onClick={() => handleSelectSkill(pop)}>
                                            <CommandItem  >
                                                {pop}
                                            </CommandItem>
                                        </div>
                                    ))}
                                    </CommandGroup>
                                    <CommandSeparator />
                                    <CommandGroup heading="Technical Skills">
                                    {techSkills.map((tech,index) => (
                                        <div key={index} className={cn('w-full rounded-md mb-1', selectedSkills.includes(tech) && 'bg-foreground/20')} onClick={() => handleSelectSkill(tech)}>
                                        <CommandItem  >
                                            {tech}
                                        </CommandItem>
                                    </div>
                                    ))}
                                    </CommandGroup>
                                    <CommandSeparator />
                                    <CommandGroup heading="Soft Skills">
                                    {softSkills.map((soft,index) => (
                                        <div key={index} className={cn('w-full rounded-md mb-1', selectedSkills.includes(soft) && 'bg-foreground/20')} onClick={() => handleSelectSkill(soft)}>
                                        <CommandItem  >
                                            {soft}
                                        </CommandItem>
                                    </div>
                                    ))}
                                    </CommandGroup>
                                </CommandList>
                            </Command>
                        </div>


                        <div className='flex justify-end w-full'>
                            <DialogClose disabled={selectedSkills.length === 0}>
                                <Button disabled={selectedSkills.length === 0} onClick={handleAddSkill}  type='submit'>
                                    Update Skills
                                </Button>
                            </DialogClose>
                        </div>
                    </DialogContent>
                </Dialog>
                    
                    <div className=" p-3 px-4 border rounded cursor-pointer hover:bg-foreground/10 transition font-medium text-sm flex items-center gap-4 bg-foreground/[0.05] justify-between" onClick={() => setCurrentSection(6)}>
                        <h5 className="font-medium text-sm">Back to menu</h5>
                    </div>
                </div>}
            
            </div>
        )}

        {currentSection === 10 && (
            <div className='Message 1 leading-normal text-center font-poppins animate-fade-in'>
                <h1 className='font-semibold text-2xl leading-normal'>Add experience in your portfolio<br /></h1>

                {<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-8'>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 p-3 px-4 border rounded cursor-pointer hover:bg-foreground/10 transition font-medium text-sm flex items-center gap-4 bg-foreground/[0.05] justify-between" onClick={() => setCurrentSection(6)}>
                        <h5 className="font-medium text-sm">Back to menu</h5>
                    </div>
                </div>}
            
            </div>
        )}



        {/* AI INPUT TEXT FIELD */}
        {/* <div className='absolute bottom-0 left-1/2 -translate-x-1/2  w-full max-w-screen-md rounded-lg'>
            <Input className='w-full h-full bg-foreground/[0.08]' placeholder='Type your message here...'/>
        </div> */}
    </div>
  )
}

export default OnBoardingAI