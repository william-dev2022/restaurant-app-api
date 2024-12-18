import express, {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import dotenv from "dotenv";
import DishRoutes from "@routes/dish.route";
import multer from "multer";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 9001;

app.use(express.json());


app.use("/dish", DishRoutes);
app.get("/", (req, res) => {
  res.status(200).json({ message: " Index" });
});

const errorHandler: ErrorRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (
    err instanceof SyntaxError &&
    (err as any).type === "entity.parse.failed"
  ) {
    res.status(400).json({
      error: "Invalid JSON format",
      message: err.message,
    });
    return;
  }
  next(err); // Pass other errors to the default error handler
};

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
