
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
import { bioSuggestions } from '@/data/create-page'
import ExpAddBtn from './exp-add-btn'
import EduAddBtn from './edu-add-btn'
import SkillAddBtn from './skills-add-btn'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { MyDocumentUNSI } from '@/app/(testing)/testing-pdf/_components/pdf-doc'

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

export type ExperienceResume = {
    jobTitle: string;
    company: string;
    description: string;
    startDate: Date | null;
    endDate: Date | null; 
}

export type EducationResume = {
    degree: string;
    institution: string;
    major: string;
    startDate: Date | null;
    endDate: Date | null; 
}

export type SkillResume = {
    name: string;
}

const ResumeGeneratorFormNSIU = () => {
    const [selectedTemplate, setSelectedTemplate] = useState<number>(1)

    const [experiences, setExperiences] = useState<ExperienceResume[]>([])
    const [educations, setEducations] = useState<EducationResume[]>([])
    const profilePic = useRef<HTMLInputElement>(null);

    const [selectedTheme, setSelectedTheme] = useState<number>(1);

    const [generateResumeModal, setGenerateResumeModal] = useState<boolean>(false)

    const [error, setError] = useState<string>("");
    const [skills, setSkills] = useState<SkillResume[]>([])

    const form = useForm<z.infer<typeof resumeSchema>>({
        resolver: zodResolver(resumeSchema),
        defaultValues: {
            name: "",
            email: "",
            bio:""
        },
    })


    const handleExperienceAdd = (experience:ExperienceResume) => {
        setExperiences([...experiences, experience])
    }
    const deleteExperience = (index:number) => {
        const newExperiences = experiences.filter((_, i) => i !== index)
        setExperiences(newExperiences)
    }

    

    const handleEducationAdd = (education:EducationResume) => {
        setEducations([...educations, education])
    }
    const deleteEducation = (index:number) => {
        const newEducation = educations.filter((_, i) => i !== index)
        setEducations(newEducation)
    }

    

    const handleSkillAdd = (skill:SkillResume) => {
        setSkills([...skills, skill])
    }
    const deleteSkill = (index:number) => {
        const newSkills = skills.filter((_, i) => i !== index)
        setSkills(newSkills)
    }

    function onSubmit(values: z.infer<typeof resumeSchema>) {

        const selectedFile = profilePic?.current?.files?.[0];
        if (selectedFile) {
            const fr = new FileReader();
            fr.readAsDataURL(selectedFile);

            // Wait for FileReader to load the file
            fr.onload = () => {
                // Access the result here if needed
                const profileUrl = fr.result as string;
                

                setGenerateResumeModal(true)
            };
        } else {
            console.log("No file selected");
            setError("Select a profile Picture");
            // Call generateResumePDF here if needed
            // generateResumePDF(values, experiences, educations);
        }

    };
  return (
    <>
    
    </>
  )
}

export default ResumeGeneratorFormNSIU

{/* <PDFDownloadLink document={<MyDocumentUNSI userPage={userPage} experiences={projectsAndExps.experiencesState} projects={projectsAndExps.projectsState} awards={projectsAndExps.awardsState} education={projectsAndExps.educationState}/>} fileName={`${userPage.title}'s Resume`}>
                        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Generate your resume')}          
                    </PDFDownloadLink> */}