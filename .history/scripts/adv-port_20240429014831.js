import {PrismaClient} from "@prisma/client"

const db = new PrismaClient()


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

    console.log("Color schemes created")
}

main()