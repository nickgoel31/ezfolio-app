"use client"
import { getExperienceByUserPageId } from "@/helpers/get-exp"
import { getProjectByUserPageId } from "@/helpers/get-project"
import { Experience, Project } from "@prisma/client"
import { useEffect, useState } from "react"

export const useProjectsAndExperiences = (userPageId:string) => {
    const [experiencesState, setExperiencesState] = useState<Experience[] | []>([])
    const [projectsState,setProjectsState] = useState<Project[] | []>([])

    useEffect(() => {
        async function getExperiencesAndProjects(){
          const experiences = await getExperienceByUserPageId(userPageId)
          const projects = await getProjectByUserPageId(userPageId)
    
          setExperiencesState(experiences)
          setProjectsState(projects)
        }
    
        getExperiencesAndProjects()

        return () => {
            setExperiencesState([])
            setProjectsState([])
        }
      })
    
    return {experiencesState,projectsState}
}
