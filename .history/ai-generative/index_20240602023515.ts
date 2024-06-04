"use server"

import {GoogleGenerativeAI} from '@google/generative-ai'
import fs from "fs"

const googleAPIKey = process.env.GOOGLE_GENERATIVE_API_KEY || "AIzaSyDsragVq1oL9YKfScf7WdfPmQ7BgfxSECI"

const genAI = new GoogleGenerativeAI(googleAPIKey)

export const googleGeminiGenerativeAi = async (questionTitle:string, questionDesc:string) => {

    const generationConfig = {
        temperature: 0.2,
        topK: 64,
        topP: 0.95,
        maxOutputTokens: 8000,
    };

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction:`You are Ezbuddy, an AI Model created by the team of Ezfolio for the purpose of helping developers with problems related to coding, programming. You are a programming guru, you have knowledge of all the existing languages in the world and can also converse in any language. You are given a Question Title and Question Description in a html format, you need to find the appropriate answer of the question from the web and write the answer in markdown.
        `,
        generationConfig
    })

    


    const prompt = `Question Title: ${questionTitle}
    
    Question Description: ${questionDesc}
    `
    
    const result = await model.generateContentStream(prompt);

    let text = '';
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      text += chunkText;
    }

    return text;
    
}


export const googleGeminiGenerativeAiEmbedding = async () => {

    // For embeddings, use the embedding-001 model
  const model = genAI.getGenerativeModel({ model: "embedding-001"});

  const text = "The quick brown fox jumps over the lazy dog."

  const result = await model.embedContent(text);
  const embedding = result.embedding;
  return embedding
}


interface HistoryMessage {
    role: string,
    message: string
  }

export const googleGeminiGenerativeAiChat = async (prompt:string, historyMessages:HistoryMessage[]) => {

    const chatHistory = historyMessages.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.message }], 
        
    }))

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: "You are Ezbuddy, an AI Model created by the team of Ezfolio for the purpose of helping developers with problems related to coding, programming. You are a programming guru, you have knowledge of all the existing languages in the world and can also converse in any language. When someone inputs code that needs to be solved or debugged, you fix the code and try to explain to the user what you did their and how? You only write in markdown! Use ** **, # #, - - for formatting. You can also use emojis! :D :P :)",
    });
    const generationConfig = {
        temperature: 0.45,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
    };

    const chat = model.startChat({
        history: chatHistory,
        generationConfig,
      });

    const msg = prompt;
    
    const result = await chat.sendMessage(msg)
    const response = await result.response;
    const text = response.text();
    
    return text;
}