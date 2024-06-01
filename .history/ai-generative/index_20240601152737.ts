"use server"

import {GoogleGenerativeAI} from '@google/generative-ai'

export const googleGeminiGenerativeAi = async () => {
    const googleAPIKey = process.env.GOOGLE_GENERATIVE_API_KEY || ""

    const genAI = new GoogleGenerativeAI(googleAPIKey)

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
    })

    async function run() {
        const prompt = "Write a story about a magic backpack."
    
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        console.log(text);
    }
    
    run();
}