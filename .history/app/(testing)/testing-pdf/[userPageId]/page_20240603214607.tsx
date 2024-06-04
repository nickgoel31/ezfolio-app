"use client"

import React, { useEffect, useState } from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from '../_components/pdf-doc';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useCurrentUserpage, useUserpageByUserId } from '@/hooks/useUserpageByUserId';
import { Experience, Project } from '@prisma/client';
import { getExperienceByUserPageId } from '@/helpers/get-exp';
import { getProjectByUserPageId } from '@/helpers/get-project';
import { useProjectsAndExperiences } from '@/hooks/useProjectsAndExperiences';

const PdfGenerationPage = () => {
  
  const userPage = useCurrentUserpage()

  const {experiencesState,projectsState} = useProjectsAndExperiences(userPage.id)

  
  return (
    <PDFViewer className='w-screen h-screen'>
        <MyDocument userPage={userPage} experiences={experiencesState} projects={projectsState}/>
    </PDFViewer>
  )
}

export default PdfGenerationPage