"use client"
import { getExperienceByUserPageId } from "@/helpers/get-exp"
import { getProjectByUserPageId } from "@/helpers/get-project"
import { Experience, Project } from "@prisma/client"
import { useEffect, useState } from "react"

export const useProjectsAndExperiences = (userPageId:string) => {
    const [experiences, setExperiences] = useState<Experience[]>([])
    const [projects,setProjects] = useState<Project[]>([])

    useEffect(() => {
        async function getExperiencesAndProjects(){
          const experiences = await getExperienceByUserPageId(userPageId)
          const projects = await getProjectByUserPageId(userPageId)
    
          setExperiences(experiences)
          setProjects(projects)
        }
    
        getExperiencesAndProjects()

        return () => {
            
        }
      })
    

    

    return {experiences,projects}
}
