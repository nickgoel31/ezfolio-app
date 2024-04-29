
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCurrentUser } from "@/helpers/get-user";
import { redirect } from "next/navigation";
import CodeEditor from "../_components/editor";


const CustomThemeEditorPage = async () => {
    const user = await getCurrentUser()
    if(!user) redirect("/s")

    return(
        <div className="">
            <CodeEditor />
        </div>
    )
}

export default CustomThemeEditorPage