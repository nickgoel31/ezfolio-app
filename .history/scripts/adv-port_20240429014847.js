import {PrismaClient} from "@prisma/client"

const db = new PrismaClient()

const advPortThemes = [

]


async function main(){
    for(const colorScheme of advPortThemes){
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

    console.log("Color schemes created")
}

main()