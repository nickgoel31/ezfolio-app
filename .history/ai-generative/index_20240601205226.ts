"use server"

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"
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

export const googleGeminiGenerativeAi = async (questionTitle:string, questionDesc:string) => {


    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
    })

    const generationConfig = {
        temperature: 0.2,
        topK: 64,
        topP: 0.95,
        maxOutputTokens: 8192,
      };
    
      const safetySettings = [
        {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
      ];
    
      const parts = [
        {text: "You are Ezbuddy, an AI Model created by the team of Ezfolio for the purpose of helping developers with problems related to coding, programming. You are a programming guru, you have knowledge of all the existing languages in the world and can also converse in any language. You are given a Question Title and Question Description in a html format, you need to find the appropriate answer of the question from the web and write the answer in html tags, for bold use , , ,, etc..        NOTE FOR AI MODEL ( NOT TO BE USED IN ANSWER )        Don't Include html, you must write your response in html tags.        Do not include Question Title or Description in the answer's starting        Avoid using  tags instead use h3 or h4, after using heading tag make sure to leave a blank  to leave a line for formatting"},
        {text: "input: Question Title: regfdgfrg\nQuestion Description: hfdhfdhfhfg\n\njhghyhg\njhkhkHleoieriufewhifg"},
        {text: "output: I am sorry, I cannot provide an answer to your question. The provided code snippet is incomplete and does not provide enough context for me to understand what you are asking. Please provide more information or context about your question."},
        {text: "input: Hi"},
        {text: "output: Hi! 👋\nI'm Ezbuddy, your AI coding companion. I'm here to help you with any coding questions you might have.  Let me know what you're working on and I'll do my best to assist you.\nReady to tackle some code? 💪"},
        {text: "input: Question Title: regfdgfrg\nQuestion Description: hfdhfdhfhfg\n\njhghyhg\njhkhkHleoieriufewhifg"},
        {text: "output: I am sorry, I cannot answer this question. The provided question description is incomplete and does not contain a clear question. Please provide a more specific question or context for me to assist you."},
        {text: "input: Question Title: Nodemailer in vercel not sending email in production\nQuestion Description: I'm using Nodemailer to send emails in my serverless Next.js project, deployed in Vercel, which works perfectly in development mode. But I'm having problems in production. No error returned, everything works the same way as is development mode, except I don't receive any email.I have another project built with React and deployed in Heroku where I send emails the same way and it works fine, development and production, so I understand the problem is with Vercel.Yes, I enabled \"Allow Less Secured Apps\" in Google account and yes, I enabled Captcha.I also read this https://vercel.com/docs/solutions/email but it doesn't really make me understand what I should do in my case. I can see it's a matter of SMTP but I don't know what exactly.Anybody experienced this kind of problem? How can I fix this?const transporter = nodemailer.createTransport({\n    host: \"smtp.gmail.com\",\n    port: 465,\n    auth: {\n        user: myEmail@gmail.com,\n        pass: myEmailPass\n    }\n});\n            \nconst mailOptions = {\n    from: `${req.body.name} ${req.body.email}`,\n    to: myEmail@gmail.com,\n    subject: `${req.body.subject}`,\n    text: `Text: ${req.body.text}`\n}\n            \ntransporter.sendMail(mailOptions, (err, res) => {\n    if(err) {\n          console.log(err);\n    } else {\n          console.log(\"success\");\n    }\n});\nUPDATEI changed to SendGrid: made an account, created an API Key, and changed the code like so(instead the one above):sgMail.setApiKey(process.env.SENDGRID_API_KEY);\nconst msg = {\n    to: `myEmail@gmail.com`,\n    from: `myEmail@gmail.com`,\n    subject: `${req.body.subject}`,\n    text: `${req.body.text}`\n};\nsgMail\n.send(msg)\n.then(() => {\n     console.log('email sent')\n})\n.catch((error) => {\n     console.error(\"error\", error)\n});\nIt logs out \"email sent\" but I don't receive any email. It's the same problem like with Nodemailer. I'm confused now..."},
        {text: "output: I ran into this issue and managed to fix it and keep using nodemailer by adding in promises with async/await.const nodemailer = require(\"nodemailer\");\n\nexport default async (req, res) => {\n\nconst { firstName, lastName, email, message } = JSON.parse(req.body);\n\nconst transporter = nodemailer.createTransport({\n    port: 465,\n    host: \"smtp.gmail.com\",\n    auth: {\n        user: \"myEmail@gmail.com\",\n        pass: \"password\",\n    },\n    secure: true,\n});\n\nawait new Promise((resolve, reject) => {\n    // verify connection configuration\n    transporter.verify(function (error, success) {\n        if (error) {\n            console.log(error);\n            reject(error);\n        } else {\n            console.log(\"Server is ready to take our messages\");\n            resolve(success);\n        }\n    });\n});\n\nconst mailData = {\n    from: {\n        name: `${firstName} ${lastName}`,\n        address: \"myEmail@gmail.com\",\n    },\n    replyTo: email,\n    to: \"recipient@gmail.com\",\n    subject: `form message`,\n    text: message,\n    html: `${message}`,\n};\n\nawait new Promise((resolve, reject) => {\n    // send mail\n    transporter.sendMail(mailData, (err, info) => {\n        if (err) {\n            console.error(err);\n            reject(err);\n        } else {\n            console.log(info);\n            resolve(info);\n        }\n    });\n});\n\nres.status(200).json({ status: \"OK\" });\n};"},
        {text: "input: Question Title: Getting started with contributing to open source\nQuestion Description: How can I start contributing to open source projects"},
        {text: "output: "},
        {text: `Question Title: ${questionTitle}
    
        Question Description: ${questionDesc}
        `}
      ];
    
      const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig,
        safetySettings,
      });
    
      const response = result.response;
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
        systemInstruction: "You are Ezbuddy, an AI Model created by the team of Ezfolio for the purpose of helping developers with problems related to coding, programming. You are a programming guru, you have knowledge of all the existing languages in the world and can also converse in any language. When someone inputs code that needs to be solved or debugged, you fix the code and try to explain to the user what you did their and how?",
    });
    const generationConfig = {
        temperature: 0.45,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
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