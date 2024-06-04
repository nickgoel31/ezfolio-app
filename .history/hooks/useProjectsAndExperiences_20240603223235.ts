"use client"
import { getExperienceByUserPageId } from "@/helpers/get-exp"
import { getProjectByUserPageId } from "@/helpers/get-project"
import { useEffect, useState } from "react"

import { getCurrentUser } from "@/helpers/get-user"
import { getUserpageByUserId } from "@/actions/userpage/get-userpage"
import { Award, Education, Experience, Project } from "@prisma/client"
import { getEducationByUserPageId } from "@/helpers/get-education"
import { getAwardsByUserPageId } from "@/helpers/get-awards"

export const useProjectsExperiencesEducationAndAwards = () => {

  const [experiencesState, setExperiencesState] = useState<Experience[] | []>([]);
  const [projectsState, setProjectsState] = useState<Project[] | []>([]);
  const [awardsState, setAwardsState] = useState<Award[] | []>([]);
  const [educationState, setEducationState] = useState<Education[] | []>([]);

    

  useEffect(() => {
    console.log("useProjectsAndExperiences useEffect called");
    async function getExperiencesAndProjects() {
      try {
        const currentUser = await getCurrentUser()
        if(!currentUser) return;
        const currentUserPage = await getUserpageByUserId(currentUser.username)
        if(!currentUserPage) return;
        
        
        const userPageId = currentUserPage.id;
        const experiences = await getExperienceByUserPageId(userPageId);
        if(!experiences) return;
        const projects = await getProjectByUserPageId(userPageId);
        if(!projects) return;
        const education = await getEducationByUserPageId(userPageId);
        if(!projects) return;
        const awards = await getAwardsByUserPageId(userPageId);
        if(!projects) return;
        console.log("exp", experiences)
        console.log("projects", projects)
        setExperiencesState(experiences);
        setProjectsState(projects);
        setEducationState(education);
        setAwardsState
      } catch (error) {
        console.log("Error fetching experiences and projects:", error);
      }
    }

    getExperiencesAndProjects();

    // return () => {
    //   setExperiencesState([]);
    //   setProjectsState([]);
    // };
  }, []); // Empty dependency array to run only once

  return { experiencesState, projectsState };
};
