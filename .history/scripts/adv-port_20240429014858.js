import {PrismaClient} from "@prisma/client"

const db = new PrismaClient()

const advPortThemes = [

]


async function main(){
    for(const advPortTheme of advPortThemes){
        await db.advancedPortfolioTheme.create({
            data: {
                
            }
        })
    }

    console.log("Color schemes created")
}

main()