import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export const MyDocument = () => (
  <Document creator='Ezfolio' producer='Ezfolio'>
    <Page size="A4" style={"flex-row bg-[#E4E4E4]"}>
      <View style={"m-10 p-10 flex-grow-1"}>
        <Text>Section #1</Text>
      </View>
      <View style={"m-10 p-10 flex-grow-1"}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);