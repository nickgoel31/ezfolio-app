"use client"

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
import { resumeTemplates } from '@/data'
import { AwardResume, CertificationResume, EducationResume, ExperienceResume, ProjectResume, SkillResume } from "@/types"
import AwardAddBtn from "./award-add-btn"
import CertificationAddBtn from "./cert-add-btn"
import ProjectAddBtn from "./project-add-btn"

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



const ResumeGeneratorFormNSIU = () => {
    const [selectedTemplate, setSelectedTemplate] = useState<number>(1)

    const [experiences, setExperiences] = useState<ExperienceResume[]>([])
    const [educations, setEducations] = useState<EducationResume[]>([])
    const profilePic = useRef<HTMLInputElement>(null);
    const [profilePicUrl,setProfilePicUrl] = useState<string>("")

    const [selectedTheme, setSelectedTheme] = useState<number>(1);

    const [generateResumeModal, setGenerateResumeModal] = useState<{status:boolean, values:z.infer<typeof resumeSchema> | null}>({status:false, values:null})

    const [error, setError] = useState<string>("");
    const [skills, setSkills] = useState<SkillResume[]>([])

    const [awards, setAwards] = useState<AwardResume[]>([])
    const [certifications, setCertifications] = useState<CertificationResume[]>([])
    const [projects, setProjects]= useState<ProjectResume[]>([])

    if(error.length > 0){
        setTimeout(() => {
            setError("")
        }, 3000)
    }

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

    const handleAwardAdd = (award:AwardResume) => {
        setAwards([...awards, award])
    }
    const deleteAward = (index:number) => {
        const newAwards = awards.filter((_, i) => i !== index)
        setAwards(newAwards)
    }

    const handleCertificationAdd = (certification:CertificationResume) => {
        setCertifications([...certifications, certification])
    }
    const deleteCertification = (index:number) => {
        const newCertifications = certifications.filter((_, i) => i !== index)
        setCertifications(newCertifications)
    }

    const handleProjectAdd = (project: ProjectResume) => {
        setProjects([...projects, project])
    }
    const deleteProject = (index:number) => {
        const newProjects = projects.filter((_, i) => i !== index)
        setProjects(newProjects)
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
                
                setProfilePicUrl(profileUrl)
                setGenerateResumeModal({status:true,values})
                setLocalStorageValues(values)
            };
        } else {
            console.log("No file selected");
            setError("Select a profile Picture");
            // Call generateResumePDF here if needed
            // generateResumePDF(values, experiences, educations);
        }
        

    };

    function setLocalStorageValues(values: z.infer<typeof resumeSchema>){
        if (typeof window !== "undefined"){
            localStorage.setItem("name", values.name)
            localStorage.setItem("email", values.email)
            localStorage.setItem("bio", values.bio)
            localStorage.setItem("experience", experiences)
            localStorage.setItem("education", educations)
            localStorage.setItem("skills", skills)
            localStorage.setItem("projects", projects)
            localStorage.setItem("awards", awards)
            localStorage.setItem("certifications", cert)
        }
    }
  return (
    <>
        {error && (
            <div className="fixed z-[80] top-0 w-full left-0 bg-red-200 p-4 text-red-700 text-sm font-medium">
                {error}
            </div>
        )}
        {generateResumeModal.status && (
            <div className='w-screen h-screen z-[80] fixed top-0 left-0'>
                <div className="w-full h-full absolute top-0 left-0 z-[60] bg-background/5 backdrop-blur-lg flex items-center justify-center">
            <div className="p-9 w-[90%] max-w-[500px] items-center justify-center flex border bg-background rounded-lg flex-col">
              <h2 className="font-semibold text-3xl text-center leading-normal">Your resume is ready!</h2>
              <p className="text-sm font-medium text-muted-foreground text-center pt-1">
                Your resume is ready to download. Click the button below to download your resume.
              </p>
              <div className="pt-6">
                {generateResumeModal.values && (
                    <Button type="button" className="w-full">
                        <PDFDownloadLink document={<MyDocumentUNSI skills={skills} experiences={experiences} education={educations} values={generateResumeModal.values} profilePicUrl={profilePicUrl} certifications={certifications} awards={awards} projects={projects}/>} fileName={`${generateResumeModal.values?.name}'s Resume`}>
                            {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Generate your resume')}          
                        </PDFDownloadLink>
                    </Button>
                )}
              </div>

              <div className="pt-6 w-full">
                <div className='w-full py-9 px-5 bg-gradient-to-tr dark:from-teal-700 dark:via-indigo-700 dark:to-rose-700 from-teal-400 via-indigo-400 to-rose-400 rounded-lg'>
                    <h4 className='font-bold text-2xl '>Ezfolio</h4>
                    <p className='text-muted-foreground text-sm font-medium'>
                    Ezfolio is a platform that helps you create a portfolio website in minutes.
                    </p>
                </div>
              </div>
            </div>
          </div>
            </div>
        )}
        <div className='flex flex-col items-start gap-8 pt-5 pb-20'>
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

                <div className="w-full">

                    <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Profile Bio</FormLabel>
                            <FormControl>
                                <Textarea placeholder="describe yourself..." className='w-full min-h-32' {...field} />
                            </FormControl>
                        </FormItem>
                    )}/>
                    <div className='w-full gap-4  mt-6 grid grid-cols-2 lg:grid-cols-4 items-start '>
                        {bioSuggestions.map((sug) => (
                            <div key={sug.id} className='rounded-lg border border-muted bg-foreground/[0.05] p-2 w-full text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/80 cursor-pointer' onClick={() => form.setValue("bio", sug.suggestion)}>
                                Template {sug.id}
                            </div>
                        ))}
                    </div>
                </div>
                </div>
                {/* SECTION 2 */}
                <div className="section-2 space-y-4">
                    <h3 className="text-semibold font-semibold text-lg">2. Add Experience</h3>

                    <div className="grid grid-cols-1 w-full gap-3">
                        {experiences.map((experience, index) => (
                            <div key={index} className="add-btn rounded border p-3  text-sm font-semibold flex gap-4 items-center flex-wrap justify-between">
                                <div className="line-clamp-1">
                                    {experience.jobTitle}
                                </div>
                                <div>
                                    <Trash2 size={15} onClick={() => deleteExperience(index)} className="text-red-500 cursor-pointer"/>
                                </div>
                            </div>
                        ))}
                        <ExpAddBtn onExperienceAdd={handleExperienceAdd}/>
                    </div>
                </div>

                {/* SECTION 3 */}
                <div className="section-1 space-y-4">
                    <h3 className="text-semibold font-semibold text-lg">3. Add Education</h3>

                    <div className="grid grid-cols-1 w-full gap-3">
                        {educations.map((education, index) => (
                            <div key={index} className="add-btn rounded border p-3  text-sm font-semibold flex gap-4 items-center flex-wrap justify-between">
                                <div className="line-clamp-1">
                                    {education.degree}
                                </div>
                                <div>
                                    <Trash2 size={15} onClick={() => deleteEducation(index)} className="text-red-500 cursor-pointer"/>
                                </div>
                            </div>
                        ))}
                        <EduAddBtn onEducationAdd={handleEducationAdd}/>
                    </div>
                </div>

                {/* SECTION 4 */}
                <div className="section-1 space-y-4">
                    <h3 className="text-semibold font-semibold text-lg">4. Add Skills</h3>

                    <div className="grid grid-cols-1 w-full gap-3">
                        {skills.map((skill, index) => (
                            <div key={index} className="add-btn rounded border p-3  text-sm font-semibold flex gap-4 items-center flex-wrap justify-between">
                                <div className="line-clamp-1">
                                    {skill.name}
                                </div>
                                <div>
                                    <Trash2 size={15} onClick={() => deleteSkill(index)} className="text-red-500 cursor-pointer"/>
                                </div>
                            </div>
                        ))}
                        <SkillAddBtn onSkillAdd={handleSkillAdd}/>
                    </div>
                </div>

                 {/* SECTION 5 */}
                 <div className="section-1 space-y-4">
                    <h3 className="text-semibold font-semibold text-lg">5. Add Awards</h3>

                    <div className="grid grid-cols-1 w-full gap-3">
                        {awards.map((award, index) => (
                            <div key={index} className="add-btn rounded border p-3  text-sm font-semibold flex gap-4 items-center flex-wrap justify-between">
                                <div className="line-clamp-1">
                                    {award.title}
                                </div>
                                <div>
                                    <Trash2 size={15} onClick={() => deleteAward(index)} className="text-red-500 cursor-pointer"/>
                                </div>
                            </div>
                        ))}
                        <AwardAddBtn onAwardAdd={handleAwardAdd}/>
                    </div>
                </div>

                {/* SECTION 6 */}
                <div className="section-1 space-y-4">
                    <h3 className="text-semibold font-semibold text-lg">6. Add Certifications</h3>

                    <div className="grid grid-cols-1 w-full gap-3">
                        {certifications.map((certification, index) => (
                            <div key={index} className="add-btn rounded border p-3  text-sm font-semibold flex gap-4 items-center flex-wrap justify-between">
                                <div className="line-clamp-1">
                                    {certification.title}
                                </div>
                                <div>
                                    <Trash2 size={15} onClick={() => deleteCertification(index)} className="text-red-500 cursor-pointer"/>
                                </div>
                            </div>
                        ))}
                        <CertificationAddBtn onCertificationAdd={handleCertificationAdd}/>
                    </div>
                </div>

                {/* SECTION 7 */}
                <div className="section-1 space-y-4">
                    <h3 className="text-semibold font-semibold text-lg">7. Add Projects</h3>

                    <div className="grid grid-cols-1 w-full gap-3">
                        {projects.map((project, index) => (
                            <div key={index} className="add-btn rounded border p-3  text-sm font-semibold flex gap-4 items-center flex-wrap justify-between">
                                <div className="line-clamp-1">
                                    {project.title}
                                </div>
                                <div>
                                    <Trash2 size={15} onClick={() => deleteProject(index)} className="text-red-500 cursor-pointer"/>
                                </div>
                            </div>
                        ))}
                        <ProjectAddBtn onProjectAdd={handleProjectAdd}/>
                    </div>
                </div>

                {/* TEMPLATE CHOOSING */}
                <div className='flex flex-col items-start gap-3'>
                    <h3 className='font-medium text-lg'>Choose Template</h3>
                    <div className='flex flex-wrap items-center gap-4'>
                        {resumeTemplates.map((temp) => (
                            <div key={temp.id} onClick={() => setSelectedTemplate(temp.id)} className={cn('border rounded-lg w-28 h-40 cursor-pointer flex items-center justify-center p-4', selectedTemplate === temp.id && 'outline outline-offset-2 outline-violet-500')}>
                                <p className='text-center font-medium text-sm text-muted-foreground'>{temp.name}</p>
                            </div>
                        ))}
                    </div>
                    

                </div>

                <div className='w-full flex items-center justify-center pt-2'>
                        <Button type='submit'>
                            Generate your resume
                        </Button>
                </div>
                
            </form>
        </Form>
        </div>
    </>
  )
}

export default ResumeGeneratorFormNSIU

{/* <PDFDownloadLink document={<MyDocumentUNSI userPage={userPage} experiences={projectsAndExps.experiencesState} projects={projectsAndExps.projectsState} awards={projectsAndExps.awardsState} education={projectsAndExps.educationState}/>} fileName={`${userPage.title}'s Resume`}>
                        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Generate your resume')}          
                    </PDFDownloadLink> */}