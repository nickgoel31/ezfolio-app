"use server"

import {GoogleGenerativeAI} from '@google/generative-ai'
import fs from "fs"

const googleAPIKey = process.env.GOOGLE_GENERATIVE_API_KEY || ""

const genAI = new GoogleGenerativeAI(googleAPIKey)

function fileToGenerativePart(path:string, mimeType:string) {
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
        mimeType
      },
    };
  }

export const googleGeminiGenerativeAi = async () => {

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
    })

    const prompt = "Who are you?"
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text;
}

export const googleGeminiGenerativeAiImage = async () => {

    const model = genAI.getGenerativeModel({
        model: "gemini-pro-vision"
    })

    const prompt = "Describe this image"

    const imageParts = [
        fileToGenerativePart("public/adv-port-theme-ss/modern-dark.png", "image/jpeg")
    ]
    
    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    
    return text;
}

export const googleGeminiGenerativeAiChat = async () => {
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
    })

    const prompt = "Who are you?"
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text;
}