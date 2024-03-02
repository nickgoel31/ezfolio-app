"use server"

import { onBoardingSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { ProjectStateType } from "@/types"
import { z } from "zod"
import { getUserpageByUserId } from "./get-userpage"
import { createProjectInDB } from "../projects/create-project"

export const createUserPageInDB = async (values:z.infer<typeof onBoardingSchema>, projects: ProjectStateType[],username:string) => {
    const validatedFields = onBoardingSchema.safeParse(values)

    if(!validatedFields.success) return {error: "Something went wrong"}
    
    const {pageBio,pageTitle,pagePicUrl} = validatedFields.data

    try {
        await db.userPage.create({
            data:{
                username,
                title:pageTitle,
                bio:pageBio,
                pagePicUrl,
                colorSchemeId: 1,
                fontId: 5,
            }
        })
    } catch (error) {
        console.log(error)
    }

    const userPage = await getUserpageByUserId(username)
    if(!userPage) return;

    await createProjectInDB(userPage.id,projects)

}