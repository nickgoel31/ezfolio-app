import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image } from '@react-pdf/renderer';

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});
// Create styles
const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      width:"100%",
      height:"100%",
      backgroundColor: 'white',
      padding:40,
    },
    section: {
      backgroundColor:'white'
    },
    headingOne: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    userName:{
        fontSize: 60,
        fontWeight: 900,
        marginBottom: 4,
    },
    headingTwo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    headingThree: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 12,
        marginBottom: 10,
    },
    listItem: {
        fontSize: 12,
        marginBottom: 5,
    },

    flexDiv: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

  });

// Create Document Component
export const MyDocument = () => (
  <Document creator='Ezfolio' producer='Ezfolio'>
    <Page size="A4" style={styles.page}>
      <View style={styles.flexDiv}>
        <View>
            <Text style={styles.userName}>HARSH</Text>
            <Text style={styles.userName}>GOEL</Text>
        </View>
        <View>
            <Image />
        </View>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);