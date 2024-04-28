import {PrismaClient} from "@prisma/client"

const db = new PrismaClient()

const colorSchemes = [
    {
        id:3,
        name:"Mystic",
        firstBgColor:"#E5E5E5",
        fgColor:"#0A0A0A",
        cardColor:"#FAFAFA",
        cardFgColor:"#0A0A0A",
        buttonBgColor:"#0A0A0A",
        buttonFgColor:"#FAFAFA",
    },
    {
        id:2,
        name:"Dark",
        firstBgColor:"#0A0A0A",
        fgColor:"#FAFAFA",
        cardColor:"#1A1A1A",
        cardFgColor:"#FAFAFA",
        buttonBgColor:"#FAFAFA",
        buttonFgColor:"#0A0A0A",
    },
]

async function main(){
    for(const colorScheme of colorSchemes){
        await db.colorScheme.create({
            data: {
                id: colorScheme.id,
                name: colorScheme.name,
                firstBgColor: colorScheme.firstBgColor,
                fgColor: colorScheme.fgColor,
                cardColor: colorScheme.cardColor,
                cardFgColor: colorScheme.cardFgColor,
                buttonBgColor: colorScheme.buttonBgColor,
                buttonFgColor: colorScheme.buttonFgColor,
            }
        })
    }

    console.log
}

main()