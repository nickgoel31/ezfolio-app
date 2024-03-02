import { PrismaClient } from "@prisma/client";

// Usage example
const db = new PrismaClient();

const colorscheme = [
  {
    id: 4,
    name: "Light",
    firstBgColor: `#E4E4E7`,
    secondBgColor: ``,
    thirdBgColor: ``,
    fgColor: `#09090B`,
    cardColor: "#FAFAFA",
    cardFgColor: "#09090B",
    buttonBgColor: "#18181B",
    buttonFgColor: "#E4E4E7",
  },
];

async function addPredefinedStyles() {
  try {
    // Define the predefined colorscheme and pagefont

    const pagefont = {
      name: "Arial",
      size: 14,
      // Add more font properties as needed
    };

    // Insert the predefined styles into the database
    for (let i = 0; i < colorscheme.length; i++) {
      await db.colorScheme.create({
        data: {
          id: colorscheme[i].id,
          name: colorscheme[i].name,
          firstBgColor: colorscheme[i].firstBgColor,
          secondBgColor: colorscheme[i].secondBgColor,
          thirdBgColor: colorscheme[i].thirdBgColor,
          fgColor: colorscheme[i].fgColor,
          cardColor: colorscheme[i].cardColor,
          cardFgColor: colorscheme[i].cardFgColor,
          buttonBgColor: colorscheme[i].buttonBgColor,
          buttonFgColor: colorscheme[i].buttonFgColor,
        },
      });
    }

    console.log("Predefined styles added successfully!");
  } catch (error) {
    console.error("Error adding predefined styles:", error);
  }
}

addPredefinedStyles();
