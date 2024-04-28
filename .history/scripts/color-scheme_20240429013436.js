const db = require('../lib/db')

const colorScheme = [
    {
        id:2,
        name:"Light",
        firstBgColor:"#E5E5E5",
        fgColor:"#0A0A0A",
        cardColor:"#FAFAFA",
        cardFgColor:"#0A0A0A",
        buttonBgColor:"#0A0A0A",
        buttonFgColor:"#FAFAFA",
    },
    {
        id:3,
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
    await db.colorScheme.createMany({
        data:colorScheme
    })
}

main()