import { connectDB } from "./db/connnectDb";
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config;

import productRoute from "./routes/product/index";
import cartRoute from "./routes/cart/index";
import orderPlacedRoute from "./routes/orderPlaced/index";

connectDB();

const app = express();
const port = 5000;
const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: allowedOrigins,
  })
);
app.use(morgan("dev"));
app.use(bodyParser.json());

app.get("/health", (req, res) => {
  res.send("Api is Working Fine");
});

app.use("/product", productRoute);
app.use("/cart", cartRoute);
app.use("/orderplaced", orderPlacedRoute);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
