import {PrismaClient} from "@prisma/client"

const db = new PrismaClient()

const pageFonts = [
    {
        id:1,
        layoutName:"Legacy"
    },
    {
        id:2,
        layoutName:"Modern"
    },

]

async function main(){
    for(const pageFont of pageFonts){
        await db.pageLayout.create({
            data: {
                id: pageFont.id,
                family: pageFont.family,
            }
        })
    }

    console.log("Page Fonts created")
}

main()