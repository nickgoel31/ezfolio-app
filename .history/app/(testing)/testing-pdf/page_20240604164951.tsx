"use client"

import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from './_components/pdf-doc';
import Link from 'next/link';
import { useCurrentUserpage } from '@/hooks/useUserpageByUserId';


const PdfTesting = () => {
  const userPage = useProjectsAndExperiences()
  return (
    <Link href={"/testing-pdf/test"}>
      Generate Pdf
    </Link>
  )
}

export default PdfTesting