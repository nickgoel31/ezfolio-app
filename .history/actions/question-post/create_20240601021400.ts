"use server"

import { questionPostSchema } from "@/form-schemas"
import { z } from "zod"

export const createQuestionPostInDB = (values: z.infer<typeof questionPostSchema>) => {
    db
}