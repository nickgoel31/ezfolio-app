"use server"

import { onBoardingSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { ProjectStateType } from "@/types"
import { z } from "zod"
import { getUserpageByUserId } from "./get-userpage"
import { createProjectInDB } from "../projects/create-project"
import { createCustomUserpageTheme } from "../custom-theme/create-custom-theme"

export const createUserPageInDB = async (values:z.infer<typeof onBoardingSchema>, projects: ProjectStateType[],username:string, imageUrl:string|undefined,currentThemeSelected:number,currentFontSelected:number,skillsArrayState) => {
    const validatedFields = onBoardingSchema.safeParse(values)

    if(!validatedFields.success) return {error: "Something went wrong"}
    
    const {pageBio,pageTitle} = validatedFields.data

    try {
        const userpage = await db.userPage.create({
            data:{
                username,
                title:pageTitle,
                bio:pageBio,
                pagePicUrl:imageUrl,
                colorSchemeId: currentThemeSelected || 1,
                layoutId: 1,
                fontId: currentFontSelected || 1,
                advancedPortfolioThemeId: 1,
                fontWeight: 500
            }
        })
        const customTheme = await createCustomUserpageTheme(userpage.id)

        await db.userPage.update({
            where:{
                id:customTheme.userPageId
            },
            data:{
                customUserPageThemeId: customTheme.id
            }
        })

        
    } catch (error) {
        console.log(error)
    }

    const userPage = await getUserpageByUserId(username)
    if(!userPage) return;

    await createProjectInDB(userPage.id,projects)

}