"use client"

import { getCurrentUser } from '@/helpers/get-user'
import { useCurrentUser } from '@/hooks/useCurrentUser'
import React, { useState } from 'react'
import NotSignedInUserFormForCreatingResume from './_components/nsiuf-create-resume'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { MyDocument } from '@/app/(testing)/testing-pdf/_components/pdf-doc'
import { useProjectsExperiencesEducationAndAwards } from '@/hooks/useProjectsAndExperiences'
import { useCurrentUserpage } from '@/hooks/useUserpageByUserId'
import { RotatingSquare } from 'react-loader-spinner'
import Footer from '@/app/(showcase)/_components/footer'
import { resumeTemplates } from '@/data'


const ResumeGeneratorPage = () => {
    const [selectedTemplate, setSelectedTemplate] = useState<number>(1)
    const router = useRouter()
    const currentUser = useCurrentUser()
    const userPage = useCurrentUserpage()
    
    const projectsAndExps = useProjectsExperiencesEducationAndAwards()

    if(!currentUser) {
        return(
            <NotSignedInUserFormForCreatingResume />
        )
    }

    if(!userPage || !projectsAndExps) return (
        <div className='space-y-5 overflow-hidden relative'>
          <div className='fixed z-[200] flex items-center justify-center bg-background/40 w-screen h-screen top-0 left-0 backdrop-blur-xl'>
          <RotatingSquare
            visible={true}
            height="100"
            width="100"
            color="#8B5CF6"
            ariaLabel="rotating-square-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          </div>
        </div>
      )

    

    
  return (
    
    // <body className='relative w-full h-full flex items-center justify-center flex-col gap-4 font-poppins'>
    //     <div className="fixed bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] z-[-100] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,#99F6E415,rgba(255,255,255,0))]"></div>
    //     <div className="fixed bottom-0 right-[-20%] top-[20%] h-[500px] z-[-100] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,#4F46E515,rgba(255,255,255,0))]"></div>

    //     <div className='w-full max-w-screen-sm mx-auto flex flex-col gap-4'>
    //         <div className='space-y-1'>
    //             <h1 className='font-bold text-4xl text-center'>Resume Generator</h1>
    //             <p className='text-center text-muted-foreground'>Create a resume with ease</p>
    //         </div>

    //         <div className='flex flex-col items-start gap-4'>
    //             <div className='flex flex-col items-start gap-3'>
    //                 <h3 className='font-medium text-lg'>Choose Template</h3>

    //                 <div className='flex flex-wrap items-center gap-4'>
    //                     {resumeTemplates.map((temp) => (
    //                         <div key={temp.id} onClick={() => setSelectedTemplate(temp.id)} className={cn('border rounded-lg w-28 h-40 cursor-pointer flex items-center justify-center p-4', selectedTemplate === temp.id && 'outline outline-offset-2 outline-violet-500')}>
    //                             <p className='text-center font-medium text-sm text-muted-foreground'>{temp.name}</p>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>

    //         <div className='w-full flex items-center justify-center pt-2'>
    //             <Button>
    //                 <PDFDownloadLink document={<MyDocument userPage={userPage} experiences={projectsAndExps.experiencesState} projects={projectsAndExps.projectsState} awards={projectsAndExps.awardsState} education={projectsAndExps.educationState}/>} fileName={`${userPage.title}'s Resume`}>
    //                     {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download PDF')}          
    //                 </PDFDownloadLink>
    //             </Button>
    //         </div>
    //     </div>

    //     <Footer />
        
    // </body>
  )
}

export default ResumeGeneratorPage