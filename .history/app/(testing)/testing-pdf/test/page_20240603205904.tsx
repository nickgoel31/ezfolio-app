"use client"

import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from '../_components/pdf-doc';
import { useCurrentUser } from '@/hooks/useCurrentUser';

const PdfGenerationPage = () => {
  const currentUser = useCurrentUser()
    if(!currentUser) return;
    const userPage = useUserpageByUserId(currentUser.id)
  return (
    <PDFViewer className='w-screen h-screen'>
        <MyDocument />
    </PDFViewer>
  )
}

export default PdfGenerationPage