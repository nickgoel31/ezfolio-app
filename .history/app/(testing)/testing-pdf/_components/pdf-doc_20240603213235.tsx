import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image, Svg } from '@react-pdf/renderer';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useUserpageByUserId } from '@/hooks/useUserpageByUserId';
import { Experience, UserPage } from '@prisma/client';
import { UserPageType } from '@/types';

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
        fontWeight: 900,
        marginBottom: 10,
        letterSpacing: 1.2,
    },
    paragraph: {
        fontSize: 12,
        marginBottom: 10,
        opacity: 0.8,
        letterSpacing: 1.1,
        lineHeight: 1.3,
        textAlign:"justify"
    },
    listItem: {
        fontSize: 12,
        marginBottom: 7,
        opacity: 0.8,
    },

    flexDiv: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        gap: 10
    },

    profilePic: {
        borderRadius: "100%",
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        objectFit: "cover",
        alignItems: 'center',
        width: 130,
        height: 130
    },
    picture:{
        width: "100%",
        height: "100%"
    },


    flexContainerMajority: {
        flex: 3,
        width:"100%"
    },
    flexContainerMinority: {
        flex: 1,
        width:"100%"
    },
    flexDivSection:{
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        gap: 10,
        position:"relative"
    }

  });

// Create Document Component
export const MyDocument = ({userPage, experiences, projects}:{userPage:UserPage, experiences:Experience[], projects:}) =>(
    <Document creator='Ezfolio' producer='Ezfolio'>
    <Page size="A4" style={styles.page}>
      <View style={styles.flexDiv}>
        <View>
            <Text style={styles.userName}>{userPage?.title.split(" ")[0]}</Text>
            <Text style={styles.userName}>{userPage?.title.split(" ")[1]}</Text>
        </View>
        <View style={styles.profilePic}>
            <Image style={styles.picture} src={"/harsh-goel.jpg"} />
        </View>
      </View>
      <View style={styles.section}>
        <Svg width={"100%"} height={2} style={{backgroundColor: "gray", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
      </View>
      {/* BIO */}
      <View style={styles.section}>
        <Text style={styles.headingThree}>BIO</Text>
        <Text style={styles.paragraph}>{userPage.bio}</Text>
      </View>

      <View style={styles.section}>
        <Svg width={"100%"} height={2} style={{backgroundColor: "gray", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
      </View>

      {/*  */}
      <View style={styles.flexDivSection}>
        <View style={styles.flexContainerMinority}>
            <Text style={styles.headingThree}>SKILLS</Text>
            {userPage.skills.map((skill) => (
                <Text style={styles.listItem}>{skill}</Text>
            ))}
        </View>
        {/* <View style={styles.section}>
            <Svg width={2} height={"100%"} style={{backgroundColor: "gray", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
        </View> */}
        <Svg width={2} height={"100%"} style={{backgroundColor: "gray", opacity:0.5, marginLeft: 10, marginRight:10}}/>
        <View style={styles.flexContainerMajority}>
            <Text style={styles.headingThree}>EDUCATION</Text>
            {/* {userPage.ex.map((edu) => (
                <Text style={styles.listItem}>{edu}</Text>
            ))} */}
        </View>
      </View>
    </Page>
  </Document>
  );