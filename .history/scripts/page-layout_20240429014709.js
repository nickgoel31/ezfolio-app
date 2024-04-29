import {PrismaClient} from "@prisma/client"

const db = new PrismaClient()

const pageFonts = [
    {
        id:1,
        layoutName:
    }
]

async function main(){
    for(const pageFont of pageFonts){
        await db.pageFont.create({
            data: {
                id: pageFont.id,
                family: pageFont.family,
            }
        })
    }

    console.log("Page Fonts created")
}

main()