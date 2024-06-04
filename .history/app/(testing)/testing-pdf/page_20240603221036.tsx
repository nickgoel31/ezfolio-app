"use client"

import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from './_components/pdf-doc';
import Link from 'next/link';
import { useCurrentUserpage } from '@/hooks/useUserpageByUserId';
import { useProjectsAndExperiences } from '@/hooks/useProjectsAndExperiences';

const PdfTesting = () => {
  return (
    <Link href={"/testing-pdf/test"}>
      Generate Pdf
    </Link>
  )
}

export default PdfTesting