
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCurrentUser } from "@/helpers/get-user";
import { redirect } from "next/navigation";


const CustomThemeEditorPage = async () => {
    const user = await getCurrentUser()
    if(!user) redirect("/s")

    return(
        
    )
}

export default CustomThemeEditorPage