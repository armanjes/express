import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/products", productRoutes);

mongoose
  .connect("mongodb://127.0.0.1:27017/express-mongoose")
  .then(() =>
    app.listen(PORT, () => {
      console.log("server running");
    })
  )
  .catch((err) => console.log(err.message));
