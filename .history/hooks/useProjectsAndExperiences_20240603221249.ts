"use client"
import { getExperienceByUserPageId } from "@/helpers/get-exp"
import { getProjectByUserPageId } from "@/helpers/get-project"
import { Experience, Project } from "@prisma/client"
import { useEffect, useState } from "react"
import { useCurrentUserpage } from "./useUserpageByUserId"
import { getCurrentUser } from "@/helpers/get-user"
import { getUserpageByUserId } from "@/actions/userpage/get-userpage"

export const useProjectsAndExperiences = () => {

//   const [experiencesState, setExperiencesState] = useState<Experience[] | []>([]);
//   const [projectsState, setProjectsState] = useState<Project[] | []>([]);

    

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
        // setExperiencesState(experiences);
        // setProjectsState(projects);
      } catch (error) {
        console.log("Error fetching experiences and projects:", error);
      }
    }

    getExperiencesAndProjects();

  }, []); // Empty dependency array to run only once

//   return { experiencesState, projectsState };
};
