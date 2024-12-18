import { Request, Response } from "express";
import { generateUniqueFileName, uploadToCloudinary } from "src/libs/utils";
import { DishZodType } from "src/schema/dish.schema";

export const createDish = async (request: Request, response: Response) => {
  const file = request.file;

  const { name, price, description, isAvailable, discount } =
    request.body as DishZodType;

  try {
    if (!file) {
      response.status(400).json({
        message: "No file uploaded",
      });

      return;
    }
    const fileName = generateUniqueFileName(name);
    const data = await uploadToCloudinary(file.buffer, fileName);

    //   store to database
    response.status(201).json(data);
    return;
  } catch (error) {
    response.status(500).json({
      message: "Internal server error",
      error: (error as any).message,
    });
    return;
  }
};
