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

    console.log("Advanced Portfolio schemes created")
}

main()