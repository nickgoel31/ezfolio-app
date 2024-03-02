
import { PrismaClient } from "@prisma/client";

// Usage example
const db = new PrismaClient(); 

const colorscheme = {
    id:1,
    name: 'Light',
    firstBgColor: `#E4E4E7`,
    secondBgColor: ``,
    thirdBgColor: ``,
    fgColor: `#09090B`,
    cardColor: '#FAFAFA',
    cardFgColor: '#09090B',
    buttonBgColor: '#18181B',
    buttonFgColor: '#E4E4E7'
    // Add more color properties as needed
};


async function addPredefinedStyles() {
    try {
        

        // Define the predefined colorscheme and pagefont
       

        const pagefont = {
            name: 'Arial',
            size: 14,
            // Add more font properties as needed
        };

        // Insert the predefined styles into the database
        await database.insert('colorschemes', colorscheme);
        await database.insert('pagefonts', pagefont);

        console.log('Predefined styles added successfully!');
    } catch (error) {
        console.error('Error adding predefined styles:', error);
    } finally {
        // Disconnect from the database
        await database.disconnect();
    }
}


addPredefinedStyles();