import {PrismaClient} from "@prisma/client"

const db = new PrismaClient()

const colorSchemes = [
    {
        id:1,
        name:"Light",
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
const colorSchemesNew = [
    {
        id:4,
        name:"Light",
        firstBgColor:"#E5E5E5",
        fgColor:"#0A0A0A",
        cardColor:"#FAFAFA",
        cardFgColor:"#0A0A0A",
        buttonBgColor:"#0A0A0A",
        buttonFgColor:"#FAFAFA",
    },
    {
        id:5,
        name:"Sunset",
        firstBgColor:"#FFCCBC",
        fgColor:"#4E342E",
        cardColor:"#FFAB91",
        cardFgColor:"#4E342E",
        buttonBgColor:"#D84315",
        buttonFgColor:"#FFFFFF",
    },
    {
        id:6,
        name:"Ocean",
        firstBgColor:"#E0F7FA",
        fgColor:"#004D40",
        cardColor:"#B2EBF2",
        cardFgColor:"#004D40",
        buttonBgColor:"#00796B",
        buttonFgColor:"#FFFFFF",
    },
    {
        id:7,
        name:"Forest",
        firstBgColor:"#E8F5E9",
        fgColor:"#1B5E20",
        cardColor:"#C8E6C9",
        cardFgColor:"#1B5E20",
        buttonBgColor:"#388E3C",
        buttonFgColor:"#FFFFFF",
    },
    {
        id:8,
        name:"Lavender",
        firstBgColor:"#F3E5F5",
        fgColor:"#4A148C",
        cardColor:"#E1BEE7",
        cardFgColor:"#4A148C",
        buttonBgColor:"#6A1B9A",
        buttonFgColor:"#FFFFFF",
    },
    {
        id:9,
        name:"Coral",
        firstBgColor:"#FFF3E0",
        fgColor:"#E65100",
        cardColor:"#FFE0B2",
        cardFgColor:"#E65100",
        buttonBgColor:"#FB8C00",
        buttonFgColor:"#FFFFFF",
    },
    {
        id:10,
        name:"Midnight",
        firstBgColor:"#212121",
        fgColor:"#FAFAFA",
        cardColor:"#424242",
        cardFgColor:"#FAFAFA",
        buttonBgColor:"#616161",
        buttonFgColor:"#FFFFFF",
    },
    {
        id:11,
        name:"Spring",
        firstBgColor:"#F1F8E9",
        fgColor:"#33691E",
        cardColor:"#DCEDC8",
        cardFgColor:"#33691E",
        buttonBgColor:"#689F38",
        buttonFgColor:"#FFFFFF",
    },
    {
        id:12,
        name:"Berry",
        firstBgColor:"#FCE4EC",
        fgColor:"#880E4F",
        cardColor:"#F8BBD0",
        cardFgColor:"#880E4F",
        buttonBgColor:"#D81B60",
        buttonFgColor:"#FFFFFF",
    },
    {
        id:13,
        name:"Slate",
        firstBgColor:"#ECEFF1",
        fgColor:"#263238",
        cardColor:"#CFD8DC",
        cardFgColor:"#263238",
        buttonBgColor:"#455A64",
        buttonFgColor:"#FFFFFF",
    },
    {
        id:14,
        name:"Amber",
        firstBgColor:"#FFF8E1",
        fgColor:"#FF6F00",
        cardColor:"#FFECB3",
        cardFgColor:"#FF6F00",
        buttonBgColor:"#FFA000",
        buttonFgColor:"#FFFFFF",
    },
];


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