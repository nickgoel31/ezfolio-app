
import { templates } from '../page'
import { useEffect, useRef, useState } from "react"
import { Check, Trash2 } from "lucide-react"

import { cn } from '@/lib/utils'

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
import { Textarea } from "@/components/ui/textarea"

import Image from "next/image"

const resumeSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
      email: z.string().email({
          message: "Invalid email address.",
      }),
      bio: z.string().min(10, {
        message: "Summary should have at least 10 characters.",
      }),
  })

export type Experience = {
    jobTitle: string;
    company: string;
    description: string;
    startDate: Date | null;
    endDate: Date | null; 
}

export type Education = {
    degree: string;
    institution: string;
    major: string;
    startDate: Date | null;
    endDate: Date | null; 
}

export type Skill = {
    name: string;
}

const ResumeGeneratorFormNSIU = () => {
    const [selectedTemplate, setSelectedTemplate] = useState<number>(1)

    const [experiences, setExperiences] = useState<Experience[]>([])
    const [educations, setEducations] = useState<Education[]>([])
    const profilePic = useRef<HTMLInputElement>(null);

    const [selectedTheme, setSelectedTheme] = useState<number>(1);

    const [error, setError] = useState<string>("");
    const [skills, setSkills] = useState<Skill[]>([])

    const handleExperienceAdd = (experience:Experience) => {
        setExperiences([...experiences, experience])
    }
    const deleteExperience = (index:number) => {
        const newExperiences = experiences.filter((_, i) => i !== index)
        setExperiences(newExperiences)
    }

    

    const handleEducationAdd = (education:Education) => {
        setEducations([...educations, education])
    }
    const deleteEducation = (index:number) => {
        const newEducation = educations.filter((_, i) => i !== index)
        setEducations(newEducation)
    }

    

    const handleSkillAdd = (skill:Skill) => {
        setSkills([...skills, skill])
    }
    const deleteSkill = (index:number) => {
        const newSkills = skills.filter((_, i) => i !== index)
        setSkills(newSkills)
    }
  return (
    <div className='flex flex-col items-start gap-8 pt-5'>
        {/* PROFILE PIC */}
        <div className="w-full max-w-screen-sm space-y-4">
            <h3 className={cn("text-semibold font-semibold text-lg", error && "text-red-500")}>Profile Picture {error && <span className="text-sm font-normal">{error}</span>}</h3>
            <div className="flex items-center gap-3 w-full ">
                <input type="file" accept=".jpeg,.png,.webp,.jpg" id="#profilepic" ref={profilePic}/> 
            </div>
        </div>

        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full max-w-screen-sm">
                {/* SECTION 1 */}
                <div className="section-1 space-y-4">
                    <h3 className="text-semibold font-semibold text-lg">1. Basic Information</h3>
                <div className="flex items-center gap-3 w-full ">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className="w-full">
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Nabakishore Majhi" className="w-full" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-full">
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="nabakishoremajhi@gmail.com" className="w-full" {...field} />
                            </FormControl>
                        </FormItem>
                    )}/>
                </div>

                <div className="flex items-center gap-3 w-full">
                <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem className="w-full">
                        <FormLabel>Mobile No</FormLabel>
                        <FormControl>
                            <Input placeholder="9984234983" {...field} />
                        </FormControl>
                    </FormItem>
                )}/>
                <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                    <FormItem className="w-full"> 
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                            <Input placeholder="Odhisa" {...field} />
                        </FormControl>
                    </FormItem>
                )}/>
                </div>

                <FormField
                control={form.control}
                name="fatherName"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Father Name</FormLabel>
                        <FormControl>
                            <Input type="text" placeholder="eg- Manish Goel" {...field} />
                        </FormControl>
                    </FormItem>
                )}/>

                <FormField
                control={form.control}
                name="summary"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Profile Bio</FormLabel>
                        <FormControl>
                            <Textarea placeholder="describe yourself..." {...field} />
                        </FormControl>
                    </FormItem>
                )}/>
                </div>
                </form>
                </Form>













        {/* TEMPLATE CHOOSING */}
        <div className='flex flex-col items-start gap-3'>
            <h3 className='font-medium text-lg'>Choose Template</h3>
            <div className='flex flex-wrap items-center gap-4'>
                {templates.map((temp) => (
                    <div key={temp.id} onClick={() => setSelectedTemplate(temp.id)} className={cn('border rounded-lg w-28 h-40 cursor-pointer flex items-center justify-center p-4', selectedTemplate === temp.id && 'outline outline-offset-2 outline-violet-500')}>
                        <p className='text-center font-medium text-sm text-muted-foreground'>{temp.name}</p>
                    </div>
                ))}
            </div>
            

        </div>
        
    </div>
  )
}

export default ResumeGeneratorFormNSIU