import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 9001;

app.get("/", (req, res) => {
  res.status(200).json({ message: " Index" });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
