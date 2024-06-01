"use server"

import { questionPostSchema } from "@/form-schemas"
import { db } from "@/lib/db"
import { z } from "zod"

export const createQuestionPostInDB = (values: z.infer<typeof questionPostSchema>) => {
    
}