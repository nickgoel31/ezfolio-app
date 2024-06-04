"use client"

import React, { Suspense, useEffect, useState } from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useCurrentUserpage, useUserpageByUserId } from '@/hooks/useUserpageByUserId';
import { Experience, Project } from '@prisma/client';
import { getExperienceByUserPageId } from '@/helpers/get-exp';
import { getProjectByUserPageId } from '@/helpers/get-project';
import { useProjectsExperiencesEducationAndAwards } from '@/hooks/useProjectsAndExperiences';
import { RotatingSquare } from 'react-loader-spinner';
import { MyDocument } from '@/app/(testing)/testing-pdf/_components/pdf-doc';
import { revalidatePath } from 'next/cache';

const PdfGenerationPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the delay as needed
  }, []);

  const userPage = useCurrentUserpage()

  const projectsAndExps = useProjectsExperiencesEducationAndAwards()

  if(!userPage || !projectsAndExps) return (
    <Suspense>
      
    </Suspense>
  )

  
  return (
      <>
        {isLoading ? (
          <div>loading...</div>
        ):(
          <PDFViewer className='w-screen h-screen'>
            <MyDocument userPage={userPage} experiences={projectsAndExps.experiencesState} projects={projectsAndExps.projectsState} awards={projectsAndExps.awardsState} education={projectsAndExps.educationState}/>
          </PDFViewer>
        )}
      </>
  )
}

export default PdfGenerationPage