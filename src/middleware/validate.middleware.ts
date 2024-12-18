import { NextFunction, Request, Response } from "express";
import { ZodError, ZodSchema } from "zod";

const validate =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body); // Validate request body against the schema
      next();
    } catch (err: unknown) {
      res.status(400).json({ errors: (err as ZodError).errors });
      return;
    }
  };

export default validate;
