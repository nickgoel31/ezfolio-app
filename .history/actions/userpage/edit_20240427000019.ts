"use server"

import { db } from "@/lib/db"
import { revalidatePath } from "next/cache"

export const editUserPageTitle = async (title:string,username:string) => {
    await db.userPage.update({
        where:{
            username
        },
        data:{
            title
        }
    })

    revalidatePath("/")
}

export const editUserPageBio = async (bio:string,username:string) => {
    await db.userPage.update({
        where:{
            username
        },
        data:{
            bio
        }
    })

    revalidatePath("/")
}

export const updateUserPageAdvancedPortfolioToggleValue = async (id:string,isAdvancedPortfolio:boolean) => {
    await db.userPage.update({
        where:{
            id
        },
        data:{
            isAdvancedPortfolio
        }
    })

    revalidatePath("/")

}


export const updateSocialsOnUserPage = async (githubUrl:string | null, instagramUrl:string | null,linkedinUrl:string | null,id:string) => {
    await db.userPage.update({
        where:{
            id
        },
        data:{
            githubUrl,
            instagramUrl,
            linkedinUrl
        }
    })

    revalidatePath("/")
}



export const updateUserPageAdvancedPortfolioTheme = async (id:string, advancedPortfolioThemeId:number) => {
    await db.userPage.update({
        where:{
            id
        },
        data:{
            advancedPortfolioThemeId
        }
    })

    revalidatePath("/")
}

export const updateUserPageTagline = async (id:string, tagline:string) => {
    await db.userPage.update({
        where:{
            id
        },
        data:{
            tagline
        }
    })

    revalidatePath("/")
}

export const updateUserPageAdvancedPortfolioThemeInUserPage = async (id:string, advancedPortfolioThemeId:number) => {
    await db.userPage.update({
        where:{
            id
        },
        data:{
            advancedPortfolioThemeId
        }
    })

    revalidatePath("/")
}