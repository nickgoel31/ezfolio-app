"use server"

import {GoogleGenerativeAI} from '@google/generative-ai'

const googleAPIKey = process.env.GOOGLE_GENERATIVE_API_KEY || ""

const genAI = new GoogleGenerativeAI(googleAPIKey)

export const googleGeminiGenerativeAi = async () => {

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
    })

    const prompt = "Write a story about a magic backpack."
    
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
    
    await run();
}