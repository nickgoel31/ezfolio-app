import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font, Image, Svg, Link } from '@react-pdf/renderer';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { useUserpageByUserId } from '@/hooks/useUserpageByUserId';
import { Award, Education, Experience, Project, UserPage } from '@prisma/client';
import { AwardResume, CertificationResume, EducationResume, ExperienceResume, ProjectResume, SkillResume, UserPageType } from '@/types';
import { z } from 'zod';
import exp from 'constants';


Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});
Font.register({
    family: 'Poppins',
    src: '/fonts/Poppins-Regular.ttf'
});
// Create styles
const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      width:"100%",
      height:"100%",
      backgroundColor: 'white',
      padding:40,
      paddingBottom: 65,
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
        color:"#4C1D95",
    },
    headingFour: {
        fontSize: 14,
        fontWeight: 900,
        marginBottom: 6,
    },
    paragraph: {
        fontSize: 12,
        marginBottom: 10,
        opacity: 0.8,
        letterSpacing: 1.1,
        lineHeight: 1.3,
        textAlign:"justify",
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
        width:"100%",
        display: 'flex',
        flexDirection: 'row',
        gap:10,
        
    },
    flexContainerMajoritySection:{
        width:"100%",
        
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
    },
    pageNumber: {
        position: 'absolute',
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: 'center',
        color: 'grey',
    },
    links:{
        color: '#8B5CF6',
    },
    date:{
        fontSize: 10,
        fontWeight: 700,
        opacity: 0.7,
    }

  });

// Create Document Component
export const MyDocument = ({userPage, experiences, projects,awards,education}:{userPage:UserPage, experiences:Experience[], projects:Project[],awards:Award[], education:Education[]}) =>(
    <Document creator='Ezfolio' producer='Ezfolio' title={`${userPage.title}'s Resume`} subject={`Created with Ezfolio`}>
    <Page size="A4" style={styles.page} wrap={false}>
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
        <Svg width={"100%"} height={2} style={{backgroundColor: "#C4B5FD", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
      </View>
      {/* BIO */}
      <View style={styles.section}>
        <Text style={styles.headingThree}>BIO</Text>
        <Text style={styles.paragraph}>{userPage.bio}</Text>
      </View>

      <View style={styles.section}>
        <Svg width={"100%"} height={2} style={{backgroundColor: "#C4B5FD", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
      </View>

      {/*  */}
      <View style={styles.flexDivSection}>
        <View style={styles.flexContainerMinority}>
            {userPage.skills.length > 0 && (
                <>
                    <Text style={styles.headingThree}>SKILLS</Text>
                    {userPage.skills.map((skill,index) => (
                        <Text key={index} style={styles.listItem}>{skill}</Text>
                    ))}
                </>
            )}
            

            {awards.length > 0 && (
                <>
                    <Svg width={"100%"} height={2} style={{backgroundColor: "#C4B5FD", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
                    <View>
                        <Text style={styles.headingThree}>AWARDS</Text>
                        {awards.map((award) => (
                            <View key={award.id}>
                                <Text style={styles.headingFour}>{award.awardTitle}</Text>
                                <Text style={styles.listItem}>{award.awardIssuingInstitution}</Text>
                                <Text style={styles.listItem}>{award.startDate.getFullYear()}</Text>
                            </View>
                        ))}
                    </View>
                </>
            )}
        </View>
        {/* <View style={styles.section}>
            <Svg width={2} height={"100%"} style={{backgroundColor: "gray", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
        </View> */}
        
        <View style={styles.flexContainerMajority}>
            <Svg width={2} height={"100%"} style={{backgroundColor: "#C4B5FD", opacity:0.5, marginLeft: 10}}/>

            <View style={styles.flexContainerMajoritySection} wrap>
            {education.length > 0 && (
                <View>
                    <Text style={styles.headingThree}>EDUCATION</Text>
                    {education.map((edu) => (
                        <View key={edu.id}>
                            <View style={styles.flexDiv}>
                                <Text style={styles.headingFour}>{edu.eduTitle}</Text>
                                <Text style={styles.date}>{edu.startDate.getFullYear()} - {edu.endDate?.getFullYear() || "Present"}</Text>
                            </View>
                            <Text style={styles.listItem}>{edu.eduInstitute}</Text>
                            <Text style={styles.paragraph}>{edu.eduDesc}</Text>
                        </View>
                    ))}
                    
                    <Svg width={"100%"} height={2} style={{backgroundColor: "#C4B5FD", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
                </View>
            )}
            {experiences.length > 0 && (
                <View>
                    <Text style={styles.headingThree}>EXPERIENCE</Text>
                    {experiences.map((exp) => (
                        <View key={exp.id}>
                            <Text style={styles.listItem}>{exp.jobTitle}</Text>
                            <Text style={styles.listItem}>{exp.jobOrg}</Text>
                            <Text style={styles.listItem}>{exp.jobDesc}</Text>
                            <Text style={styles.listItem}>{exp.startDate.toDateString()}</Text>
                            <Text style={styles.listItem}>{exp.endDate?.toDateString() || "Present"}</Text>
                        </View>
                    ))}
                        <View style={{marginBottom:8}}>
                            <View style={styles.flexDiv}>
                                <Text style={styles.headingFour}>Frontend Developer</Text>
                                <Text style={styles.date}>September 2017 - {"Present"}</Text>
                            </View>
                            <Text style={styles.listItem}>Netedge India</Text>
                            <Text style={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam a adipisci neque reprehenderit amet.</Text>
                        </View>
                        <View>
                            <View style={styles.flexDiv}>
                                <Text style={styles.headingFour}>Frontend Developer</Text>
                                <Text style={styles.date}>September 2017 - {"Present"}</Text>
                            </View>
                            <Text style={styles.listItem}>Netedge India</Text>
                            <Text style={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam a adipisci neque reprehenderit amet.</Text>
                        </View>
                    <Svg width={"100%"} height={2} style={{backgroundColor: "#C4B5FD", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
                </View>
            )}

            {projects.length > 0 && (
                <View break>
                    <Text style={styles.headingThree}>PROJECTS</Text>
                    {projects.map((project) => (
                        <View key={project.id}>
                            <Text style={styles.headingFour}>{project.projectTitle}&nbsp;<Link style={{color: '#8B5CF6', fontSize:10}} href={project.projectUrl}>{"Visit"}</Link></Text>
                               
                            <Text style={styles.paragraph}>{project.projectDesc}</Text>
                            
                        </View>
                    ))}
                </View>
            )}
            </View>

        </View>
      </View>

      <Text style={styles.pageNumber}>Created with <Link style={styles.links} href='https://www.ezfolio.social' fixed>Ezfolio</Link></Text>
    </Page>
  </Document>
  );


  const resumeSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
      email: z.string().email({
          message: "Invalid email address.",
      }),
      bio: z.string().min(10, {
        message: "Summary should have at least 10 characters.",
      }),
  })


export const MyDocumentUNSI = ({values,profilePicUrl,skills, experiences,education, awards, certifications,projects}:{values: z.infer<typeof resumeSchema>,profilePicUrl:string,skills: SkillResume[], experiences:ExperienceResume[], education:EducationResume[], awards: AwardResume[], certifications: CertificationResume[],projects: ProjectResume[]}) => (
<Document creator='Ezfolio' producer='Ezfolio' title={`${values.name}'s Resume`} subject={`Created with Ezfolio`}>
    <Page size="A4" style={styles.page} wrap={false}>
      <View style={styles.flexDiv}>
        <View>
            <Text style={styles.userName}>{values.name.split(" ")[0]}</Text>
            <Text style={styles.userName}>{values.name.split(" ")[1]}</Text>
        </View>
        <View style={styles.profilePic}>
            <Image style={styles.picture} src={profilePicUrl} />
        </View>
      </View>
      <View style={styles.section}>
        <Svg width={"100%"} height={2} style={{backgroundColor: "#C4B5FD", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
      </View>
      {/* BIO */}
      <View style={styles.section}>
        <Text style={styles.headingThree}>BIO</Text>
        <Text style={styles.paragraph}>{values.bio}</Text>
      </View>

      <View style={styles.section}>
        <Svg width={"100%"} height={2} style={{backgroundColor: "#C4B5FD", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
      </View>

      {/*  */}
      <View style={styles.flexDivSection}>
        <View style={styles.flexContainerMinority}>
            {skills.length > 0 && (
                <>
                    <Text style={styles.headingThree}>SKILLS</Text>
                    {skills.map((skill,index) => (
                        <Text key={index} style={styles.listItem}>{skill.name}</Text>
                    ))}
                </>
            )}
            <Svg width={2} height={"100%"} style={{backgroundColor: "#C4B5FD", opacity:0.5, marginLeft: 10}}/>

            {projects.length > 0 && (
                <>
                    <Text style={styles.headingThree}>SKILLS</Text>
                    {skills.map((skill,index) => (
                        <Text key={index} style={styles.listItem}>{skill.name}</Text>
                    ))}
                </>
            )}
        </View>
        {/* <View style={styles.section}>
            <Svg width={2} height={"100%"} style={{backgroundColor: "gray", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
        </View> */}
        
        <View style={styles.flexContainerMajority}>
            <Svg width={2} height={"100%"} style={{backgroundColor: "#C4B5FD", opacity:0.5, marginLeft: 10}}/>

            <View style={styles.flexContainerMajoritySection} wrap>
            {education.length > 0 && (
                <View>
                    <Text style={styles.headingThree}>EDUCATION</Text>
                    {education.map((edu,index) => (
                        <View key={index}>
                            <View style={styles.flexDiv}>
                                <Text style={styles.headingFour}>{edu.degree}</Text>
                                <Text style={styles.date}>{edu?.startDate?.getFullYear()} - {edu.endDate?.getFullYear() || "Present"}</Text>
                            </View>
                            <Text style={styles.listItem}>{edu.institution}</Text>
                            <Text style={styles.paragraph}>{edu.major}</Text>
                        </View>
                    ))}
                    
                    <Svg width={"100%"} height={2} style={{backgroundColor: "#C4B5FD", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
                </View>
            )}
            {experiences.length > 0 && (
                <View>
                    <Text style={styles.headingThree}>EXPERIENCE</Text>
                    {experiences.map((exp,index) => (
                        <View key={index} style={{marginBottom:8}}>
                        <View style={styles.flexDiv}>
                            <Text style={styles.headingFour}>{exp.jobTitle}</Text>
                            <Text style={styles.date}>{exp?.startDate?.getFullYear()} - {exp.endDate?.getFullYear() || "Present"}</Text>
                        </View>
                        <Text style={styles.listItem}>{exp.company}</Text>
                        <Text style={styles.paragraph}>{exp.description}</Text>
                    </View>
                    ))}
                    <Svg width={"100%"} height={2} style={{backgroundColor: "#C4B5FD", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
                </View>
            )}

            {/* {projects.length > 0 && (
                <View break>
                    <Text style={styles.headingThree}>PROJECTS</Text>
                    {projects.map((project) => (
                        <View key={project.id}>
                            <Text style={styles.headingFour}>{project.projectTitle}&nbsp;<Link style={{color: '#8B5CF6', fontSize:10}} href={project.projectUrl}>{"Visit"}</Link></Text>
                               
                            <Text style={styles.paragraph}>{project.projectDesc}</Text>
                            
                        </View>
                    ))}
                </View>
            )} */}

            {awards.length > 0 && (
                <View>
                    <Text style={styles.headingThree}>AWARDS</Text>
                    {awards.map((award,index) => (
                        <View key={index} style={{marginBottom:8}}>
                        <View style={styles.flexDiv}>
                            <Text style={styles.headingFour}>{award.title}</Text>
                            <Text style={styles.date}>{award.date?.getFullYear()}</Text>
                        </View>
                        <Text style={styles.listItem}>{award.issuingOrg}</Text>
                        <Text style={styles.paragraph}>{award.description}</Text>
                    </View>
                    ))}
                    <Svg width={"100%"} height={2} style={{backgroundColor: "#C4B5FD", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
                </View>
            )}
            {certifications.length > 0 && (
                <View>
                    <Text style={styles.headingThree}>CERTIFICATIONS</Text>
                    {certifications.map((certification,index) => (
                        <View key={index} style={{marginBottom:8}}>
                        <View style={styles.flexDiv}>
                            <Text style={styles.headingFour}>{certification.title}</Text>
                            <Text style={styles.date}>{certification.date?.getFullYear()}</Text>
                        </View>
                        <Text style={styles.listItem}>{certification.issuingOrg}</Text>
                        <Text style={styles.paragraph}>{certification.description}</Text>
                    </View>
                    ))}
                    <Svg width={"100%"} height={2} style={{backgroundColor: "#C4B5FD", marginTop: 20, marginBottom: 20, opacity:0.5}}/>
                </View>
            )}


            </View>

        </View>
      </View>

      <Text style={styles.pageNumber}>Created with <Link style={styles.links} href='https://www.ezfolio.social' fixed>Ezfolio</Link></Text>
    </Page>
  </Document>
)