"use client"

import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from '../_components/pdf-doc';

const PdfGenerationPage = () => {
  return (
    <PDFViewer className='w-screen h-screen'>
        <MyDocument />
    </PDFViewer>
  )
}

export default PdfGenerationPage