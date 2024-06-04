"use client"
import { getExperienceByUserPageId } from "@/helpers/get-exp"
import { getProjectByUserPageId } from "@/helpers/get-project"
import { Experience, Project } from "@prisma/client"
import { useEffect, useState } from "react"

export const useCurrentUserpage = (userPageId:string) => {
    const [experiences, setExperiences] = useState<Experience[] | []>([])
    const [projects,setProjects] = useState<Project[] | []>([])

    useEffect(() => {
        async function getExperiencesAndProjects(){
          if(!userPage) return;
          const experiences = await getExperienceByUserPageId(userPage.id)
          const projects = await getProjectByUserPageId(userPage.id)
    
          setExperiences(experiences)
          setProjects(projects)
        }
    
        getExperiencesAndProjects()
      },[experiences,projects])
    

    

    return userpage;
}
