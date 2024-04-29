
import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";


const CustomThemeEditorPage = async () => {
    const user = await getCurrentUser()
    if(!user) redirect("/s")
}

export default CustomThemeEditorPage