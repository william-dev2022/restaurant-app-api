import { createDish } from "@controllers/dish.controller";
import express from "express";
import multer from "multer";
import validate from "src/middleware/validate.middleware";
import { createDishSchema } from "src/schema/dish.schema";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.post(
  "/",
  [upload.single("image"), validate(createDishSchema)],
  createDish
);

router.patch("/", (req, res) => {
  res.status(200).json({ message: " Index" });
});

export default router;
