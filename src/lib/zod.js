import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email" }).min(6),
  password: z.string().min(6),
});

export const signupSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be atleast 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be atleast 2 characters" }),
  email: z.string().email({ message: "Invalid email" }).min(6),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});
