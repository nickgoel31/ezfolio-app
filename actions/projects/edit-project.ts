"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { z } from "zod"

const editProjectSchema = z.object({
    projectTitle: z.string().max(40).min(1),
    projectDesc:z.string().max(256),
    projectUrl: z.string().url()
})

export const editProjectInDB = async (values:z.infer<typeof editProjectSchema>,id:string) => {

    const validatedFields = editProjectSchema.safeParse(values)
    if(!validatedFields.success) return {error: "SOMETHING WENT WRONG"}

    const { projectDesc,projectTitle,projectUrl } = validatedFields.data
    
    try {
        await db.project.update({
            where:{
                id
            },
            data:{
                projectDesc,
                projectTitle,
                projectUrl
            }
        })

    } catch (error) {
        console.log(error)
    }

    revalidatePath("/")
}