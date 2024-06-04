import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';

const PdfTesting = () => {
  return (
    <PDFViewer>
        <MyDocument />
    </PDFViewer>
  )
}

export default PdfTesting