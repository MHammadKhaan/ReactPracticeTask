import { z } from "zod"

export const userSignUpSchema = z.object({
    fullName: z.string().min(3, "Full name is required"),
    contact: z.string().min(11, "phone number is required"),
    email: z.string().email("invalid email address"),
    password: z.string().min(6, "password must be at least 6 characters ")
})

export type SignUpInputState = z.infer<typeof userSignUpSchema>

//Login schema
export const userLoginSchema = z.object({
    email: z.string().email("invalid email address"),
    password: z.string().min(6, "password must be at least 6 characters ")
})
export type LoginInputState = z.infer<typeof userLoginSchema>