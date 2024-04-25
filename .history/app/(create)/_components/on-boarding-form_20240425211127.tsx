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
import { useCallback, useEffect, useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Replace, Trash2 } from "lucide-react"
import { redirect, useRouter } from "next/navigation"
import { ProjectStateType } from "@/types"
import { onBoardingSchema } from "@/form-schemas"
import { createUserPageInDB } from "@/actions/userpage/create-userpage"
import CreateFormImageUpload from "./image-upload"
import { UploadButton } from "@/utils/uploadthing"
import Image from "next/image"
import { ColorRing } from "react-loader-spinner"


 


const OnBoardingForm = ({username}:{username:string}) => {

    const [isFirstSection,setIsFirstSection] = useState(true)
    const [isSecondSection,setIsSecondSection] = useState(false)
    const [isThirdSection,setIsThirdSection] = useState(false)

    const [projects, setProjects] = useState<ProjectStateType[]>([])
    const [projectTitle, setprojectTitle] = useState<string | "">("")
    const [projectDesc, setprojectDesc] = useState<string | "">("")
    const [projectUrl, setprojectUrl] = useState<string | "">("")

    const [user,setUser] = useState<string>()
    const [uploading,setUploading] = useState<boolean>(false)
    const [imageUrl, setImageUrl] = useState<string | undefined>("")

    // const handleImageUrlChange = useCallback((url:string | undefined) => {
    //     setImageUrl(url)
    // },[imageUrl])

    // useEffect(() => {
    //     console.log(imageUrl || "no image")
    // },[imageUrl])


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
        createUserPageInDB(values,projects,username,imageUrl)
        router.push("/d/redirect")
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full max-w-screen-sm mx-auto">

        {isFirstSection && (
            <div className="w-full space-y-4">
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

<Button type="submit" disabled={!isFormValid} className="w-full">Submit</Button>
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