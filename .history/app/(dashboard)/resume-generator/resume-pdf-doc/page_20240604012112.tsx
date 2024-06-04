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
  const userPage = useCurrentUserpage()

  const projectsAndExps = useProjectsExperiencesEducationAndAwards()

  if(!userPage || !projectsAndExps) return (
    <Suspense>
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
    </Suspense>
  )

  
  return (
    <Suspense>
      <PDFViewer className='w-screen h-screen'>
        <MyDocument userPage={userPage} experiences={projectsAndExps.experiencesState} projects={projectsAndExps.projectsState} awards={projectsAndExps.awardsState} education={projectsAndExps.educationState}/>
      </PDFViewer>
    </Suspense>
  )
}

export default PdfGenerationPage