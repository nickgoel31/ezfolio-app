"use client"

import React, { useEffect, useState } from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from '../_components/pdf-doc';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useCurrentUserpage, useUserpageByUserId } from '@/hooks/useUserpageByUserId';
import { Experience, Project } from '@prisma/client';
import { getExperienceByUserPageId } from '@/helpers/get-exp';
import { getProjectByUserPageId } from '@/helpers/get-project';
import { useProjectsExperiencesEducationAndAwards } from '@/hooks/useProjectsAndExperiences';
import { RotatingSquare } from 'react-loader-spinner';

const PdfGenerationPage = () => {
  const userPage = useCurrentUserpage()

  const projectsAndExps = useProjectsExperiencesEducationAndAwards()

  if(!userPage || !projectsAndExps) return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <RotatingSquare
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="rotating-square-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )

  
  return (
    <PDFViewer className='w-screen h-screen'>
        <MyDocument userPage={userPage} experiences={projectsAndExps.experiencesState} projects={projectsAndExps.projectsState} awards={projectsAndExps.awardsState} education={projectsAndExps.educationState}/>
    </PDFViewer>
  )
}

export default PdfGenerationPage