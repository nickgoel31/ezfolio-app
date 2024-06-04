
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
  return (
    <div className='flex flex-wrap items-center gap-4'>
        {templates.map((temp) => (
            <div key={temp.id} onClick={() => setSelectedTemplate(temp.id)} className={cn('border rounded-lg w-28 h-40 cursor-pointer flex items-center justify-center p-4', selectedTemplate === temp.id && 'outline outline-offset-2 outline-violet-500')}>
                <p className='text-center font-medium text-sm text-muted-foreground'>{temp.name}</p>
            </div>
        ))}
    </div>
  )
}

export default ResumeGeneratorFormNSIU