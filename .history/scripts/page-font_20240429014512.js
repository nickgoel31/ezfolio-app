import {PrismaClient} from "@prisma/client"

const db = new PrismaClient()

const pageFonts = [
    {
        id:4,
        family:"Lobster Two",
    },
    {
        id:5,
        family:"Playfair Display",
    },
    {
        id:6,
        family:"Sacramento",
    },
    {
        id:7,
        family:"Shadows Into Light",
    },
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