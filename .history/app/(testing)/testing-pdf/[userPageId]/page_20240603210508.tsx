"use client"

import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from '../_components/pdf-doc';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useUserpageByUserId } from '@/hooks/useUserpageByUserId';

const PdfGenerationPage = () => {
  const userPage = useCurrentUserpage()
  return (
    <PDFViewer className='w-screen h-screen'>
        <MyDocument userPage={userPage}/>
    </PDFViewer>
  )
}

export default PdfGenerationPage