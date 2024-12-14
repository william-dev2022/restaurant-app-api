import { Request, Response } from "express";

export const createDish = (request: Request, response: Response) => {

    
  response.status(200).json({ message: "Create Dish" });
  return;
};
