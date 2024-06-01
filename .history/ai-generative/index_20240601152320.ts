
import {GoogleGenerativeAI} from '@google/generative-ai'

const googleAPIKey = process.env.GOOGLE_GENERATIVE_API_KEY || ""

const genAI = new GoogleGenerativeAI(googleAPIKey)

genAI.