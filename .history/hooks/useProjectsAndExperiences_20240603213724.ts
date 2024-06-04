"use client"
import { Experience, Project } from "@prisma/client"
import { useEffect, useState } from "react"

export const useCurrentUserpage = () => {
    const [experiences, setExperiences] = useState<Experience[] | []>([])
    const [projects,setProjects] = useState<Project[] | []>([])

    useEffect(() => {
        async function getuserpage(){
            const user = await getCurrentUser()
            if(!user) return;
            let curUserpage = await getUserpageByUserId(user.username)
            if(!curUserpage) return;

            setUserpage(curUserpage)
        }

        getuserpage()
    },[])

    

    return userpage;
}
