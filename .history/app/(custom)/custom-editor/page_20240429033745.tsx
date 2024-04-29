
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getCurrentUser } from "@/helpers/get-user";


const CustomThemeEditorPage = async () => {
    const user = await getCurrentUser()
    if(!user) redirect("/s")
}

export default CustomThemeEditorPage