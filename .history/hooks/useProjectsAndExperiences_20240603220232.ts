"use client"
import { getExperienceByUserPageId } from "@/helpers/get-exp"
import { getProjectByUserPageId } from "@/helpers/get-project"
import { Experience, Project } from "@prisma/client"
import { useEffect, useState } from "react"
import { useCurrentUserpage } from "./useUserpageByUserId"

export const useProjectsAndExperiences = () => {

  const [experiencesState, setExperiencesState] = useState<Experience[] | []>([]);
  const [projectsState, setProjectsState] = useState<Project[] | []>([]);


  useEffect(() => {
    
    async function getExperiencesAndProjects() {
      try {
        const currentUserPage = useCurrentUserpage();
        if (!currentUserPage) return { experiencesState: [], projectsState: [] }; // Empty state if no user page

        const userPageId = currentUserPage.id;
        const experiences = await getExperienceByUserPageId(userPageId);
        if(!experiences) return;
        const projects = await getProjectByUserPageId(userPageId);
        if(!projects) return;
        setExperiencesState(experiences);
        setProjectsState(projects);
      } catch (error) {
        console.error("Error fetching experiences and projects:", error);
      }
    }

    getExperiencesAndProjects();

    // return () => {
    //   setExperiencesState([]);
    //   setProjectsState([]);
    // };
  }, []); // Empty dependency array to run only once

//   return { experiencesState, projectsState };
};
