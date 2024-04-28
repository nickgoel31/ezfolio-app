"use server"

import { db } from "@/lib/db"
import { ProjectStateType } from "@/types"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export const createProjectInDB = async (userPageId:string, projects:ProjectStateType[]) => {
    try {
        for(let i=0;i< projects.length;i++){
            await db.project.create({
                data:{
                    userPageId,
                    projectTitle: projects[i].projectTitle,
                    projectDesc: projects[i].projectDesc,
                    projectUrl: projects[i].projectUrl
                }
            })
        }
    } catch (error) {
        console.log(error)
    }
}


const newProjectSchema = z.object({
    projectTitle: z.string().max(40).min(1),
    projectDesc:z.string().max(256),
    projectUrl: z.string().url()
})

export const createNewProjectInDB = async (values:z.infer<typeof newProjectSchema>,userPageId:string) => {
    const validatedFields = newProjectSchema.safeParse(values)
    if(!validatedFields.success) return {error: "SOMETHING WENT WRONG"}

    const { projectDesc,projectTitle,projectUrl } = validatedFields.data

    const newProject = await db.project.create({
        data:{
            userPageId,
            projectTitle,
            projectDesc,
            projectUrl
        }
    })

    revalidatePath("/")
    return {success:true, }
}