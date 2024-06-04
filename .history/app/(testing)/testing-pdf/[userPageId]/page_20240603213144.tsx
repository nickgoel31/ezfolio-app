"use client"

import React, { useState } from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from '../_components/pdf-doc';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useCurrentUserpage, useUserpageByUserId } from '@/hooks/useUserpageByUserId';
import { Experience } from '@prisma/client';

const PdfGenerationPage = () => {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [experiences, setExperiences] = useState<Experience[]>([])
  const userPage = useCurrentUserpage()
  if(!userPage) return;

  return (
    <PDFViewer className='w-screen h-screen'>
        <MyDocument userPage={userPage} experience={experiences} projects={projects}/>
    </PDFViewer>
  )
}

export default PdfGenerationPage