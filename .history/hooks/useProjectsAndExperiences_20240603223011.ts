"use client"
import { getExperienceByUserPageId } from "@/helpers/get-exp"
import { getProjectByUserPageId } from "@/helpers/get-project"
import { useEffect, useState } from "react"

import { getCurrentUser } from "@/helpers/get-user"
import { getUserpageByUserId } from "@/actions/userpage/get-userpage"
import { Experience, Project } from "@prisma/client"

export const useProjectsExperiencesEducationAndAwards = () => {

  const [experiencesState, setExperiencesState] = useState<Experience[] | []>([]);
  const [projectsState, setProjectsState] = useState<Project[] | []>([]);
  const [projectsState, setProjectsState] = useState<Project[] | []>([]);
  const [projectsState, setProjectsState] = useState<Project[] | []>([]);

    

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
        console.log("exp", experiences)
        console.log("projects", projects)
        setExperiencesState(experiences);
        setProjectsState(projects);
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
