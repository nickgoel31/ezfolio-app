import {PrismaClient} from "@prisma/client"

const db = new PrismaClient()

const pageFonts = [
    {
        id:4,
        family:"Roboto",
    }
]

async function main(){
    for(const pageFont of pageFonts){
        
    }

    console.log("Color schemes created")
}

main()