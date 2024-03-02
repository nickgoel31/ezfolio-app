"use server"

import { onBoardingSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { ProjectStateType } from "@/types"
import { z } from "zod"
import { getUserpageByUserId } from "./get-userpage"

export const createUserPageInDB = async (values:z.infer<typeof onBoardingSchema>, projects: ProjectStateType[],username:string) => {
    const validatedFields = onBoardingSchema.safeParse(values)

    if(!validatedFields.success) return {error: "Something went wrong"}
    
    const {pageBio,pageTitle} = validatedFields.data

    try {
        await db.userPage.create({
            data:{
                username,
                title:pageTitle,
                bio:pageBio,
                colorSchemeId: 1,
                fontId: 1
            }
        })
    } catch (error) {
        console.log(error)
    }

    const userPage = await getUserpageByUserId(username)
    if(!userPage) return;

    for(let i=0; i<projects.length;i++){
        await db.project.create({
            data:{
                userPageId: userPage.id,
                projectTitle:  projects[i].title,
                projectDesc:   projects[i].desc,
                projectUrl: projects[i].url
            }
        })
    }

}