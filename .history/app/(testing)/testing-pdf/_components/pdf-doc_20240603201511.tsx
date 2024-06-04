import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


// Create Document Component
export const MyDocument = () => (
  <Document creator='Ezfolio' producer='Ezfolio'>
    <Page size="A4" style={"flex flex-column bg-red-500 gap-4"}>
      <View style={"bg-red"}>
        <Text>Section #1</Text>
      </View>
      <View style={"bg-red"}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);