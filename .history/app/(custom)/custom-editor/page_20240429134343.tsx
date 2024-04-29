
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCurrentUser } from "@/helpers/get-user";
import { redirect } from "next/navigation";
import CodeEditor from "../_components/editor";
import { getUserpageByUserId } from "@/actions/userpage/get-userpage";


const CustomThemeEditorPage = async () => {
    const user = await getCurrentUser()
    if(!user) redirect("/s")

    const userPage = await getUserpageByUserId(user.username)
    if(!userPage) redirect("/create")

    if(!userPage.isCustomUserPageThemeEnabled) redirect("/d/${}`)

    return(
        <div className="flex gap-4">
            <CodeEditor />
        </div>
    )
}

export default CustomThemeEditorPage