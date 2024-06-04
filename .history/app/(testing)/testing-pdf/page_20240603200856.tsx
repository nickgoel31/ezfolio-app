import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import { MyDocument } from './_components/pdf-doc';

const PdfTesting = () => {
  return (
    <PDFViewer>
        <MyDocument />
    </PDFViewer>
  )
}

export default PdfTesting