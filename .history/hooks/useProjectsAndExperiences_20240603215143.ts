"use client"
import { getExperienceByUserPageId } from "@/helpers/get-exp"
import { getProjectByUserPageId } from "@/helpers/get-project"
import { Experience, Project } from "@prisma/client"
import { useEffect, useState } from "react"
import { useCurrentUserpage } from "./useUserpageByUserId"

export const useProjectsAndExperiences = () => {
    try {
        const userPage = useCurrentUserpage()
        if(!userPage) return;
        const userPageId = userPage.id
        const [experiencesState, setExperiencesState] = useState<Experience[] | []>([]);
        const [projectsState, setProjectsState] = useState<Project[] | []>([]);
    
        useEffect(() => {
        async function getExperiencesAndProjects() {
            const experiences = await getExperienceByUserPageId(userPageId);
            const projects = await getProjectByUserPageId(userPageId);
            setExperiencesState(experiences);
            setProjectsState(projects);
        }
    
        getExperiencesAndProjects();
    
        return () => {
            setExperiencesState([]);
            setProjectsState([]);
        };
        }, []); // Empty dependency array to run only once
    
        return { experiencesState, projectsState };
    } catch (error) {
        console.log(error)
    }
  };
  
