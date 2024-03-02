"use server"

import { db } from "@/lib/db";

export const populateColorScheme = async () => {
    const colorSchemes = [
        {
            name: "Dark",
            firstBgColor: "#09090B",
            secondBgColor: "",
            thirdBgColor: "",
            fgColor: "#FAFAFA",
            cardColor: "#18181B",
            cardFgColor: "#FAFAFA",
            buttonBgColor: "#F4F4F5",
            buttonFgColor: "#09090B"
        },
    ];
    for(let i=0;i<colorSchemes.length;i++){
        const {name,buttonBgColor,buttonFgColor,cardColor,cardFgColor,fgColor,firstBgColor,secondBgColor,thirdBgColor} = colorSchemes[i]
        await db.colorScheme.createMany({
            data:{
                name,
                firstBgColor,
                buttonBgColor,
                buttonFgColor,
                cardColor,
                cardFgColor,
                fgColor,
                secondBgColor,
                thirdBgColor
            }
        })
    }

    console.log("POPULATED SUCCESSFULLY")
    
}

export const deleteAllColorSchemes = async () => {
    const colorSchemes = await db.colorScheme.findMany()
    if(!colorSchemes) return;

    for(let i=2;i<colorSchemes.length;i++){
        await db.colorScheme.delete({
            where:{
                id: i
            }
        })
    }
    console.log("DELETED ALL COLORSCHEMES EXCEPT 1")
    
}