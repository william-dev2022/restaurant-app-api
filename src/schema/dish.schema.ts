import { z } from "zod";

export const createDishSchema = z.object({
  name: z.string().min(1, "Dish name is required"),
  description: z.string().min(1, "Dish description is required"),
  price: z
    .union([z.string(), z.number()])
    .transform((value) => (typeof value === "string" ? Number(value) : value))
    .refine(
      (value) => !isNaN(value) && value > 0,
      "Price must be a positive number"
    ),
  tags: z.array(z.string()).optional(),
  menu: z.string().nullable().optional(),
  discount: z
    .union([z.string(), z.number()])
    .transform((value) => (typeof value === "string" ? Number(value) : value))
    .refine(
      (value) => !isNaN(value) && value > 0 && value <= 100,
      "Price must be a positive number and between 0 and 101"
    )
    .optional(),
  isAvailable: z
    .union([z.string(), z.boolean()])
    .transform((value) => (typeof value === "string" ? Boolean(value) : value))
    .refine(
      (value) => typeof value === "boolean",
      "isAvailable must be a boolean"
    )
    .default(true),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type DishZodType = z.infer<typeof createDishSchema>;
