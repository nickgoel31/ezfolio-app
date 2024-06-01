
import {GoogleGenerativeAI} from '@google/generative-ai'

const googleAPIKey = process.env.GOOGLE_GENERATIVE_API_KEY
if(!googleAPIKey) return;

const genAI = new GoogleGenerativeAI(googleAPIKey)