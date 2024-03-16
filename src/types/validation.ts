import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 symbols" })
    .max(25, { message: "Password must be less than 20 symbols" }),
});

export const signUpSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 symbols" })
    .max(25, { message: "Password must be less than 20 symbols" }),
  role: z.string(),
});
