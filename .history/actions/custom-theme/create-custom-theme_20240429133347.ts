"use server"

import { boilerCodeCss, boilerCodeHtml } from "@/data/editorData"
import { db } from "@/lib/db"

export const createCustomUserpageTheme = async (userPageId: string) => {
    const theme = await db.customUserPageTheme.create({
        data:{
            userPageId,
            htmlCode:boilerCodeHtml,
            cssCode:boilerCodeCss
        }
    })

    return theme;
}