import { connectDB } from "./db/connnectDb";
// src/index.ts
import express from "express";
import dotenv from "dotenv";
import productRoute from "./routes/product/index";
import cartRoute from "./routes/cart/index";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config;
const app = express();
const port = 5000;
connectDB();
const allowedOrigins = ["http://localhost:3000"];
app.use(morgan("dev"));
app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello, TypeScript with Express!");
});

app.use("/product", productRoute);
app.use("/cart", cartRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
