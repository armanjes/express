import express from "express";
import mongoose from "mongoose";
import "express-async-errors";
import productRoutes from "./routes/productRoutes.js";
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productRoutes);
// Global Error Handler Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    ok: false,
    error: err.message || "Something went wrong",
  });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/express-mongoose")
  .then(() =>
    app.listen(PORT, () => {
      console.log("server running");
    })
  )
  .catch((err) => console.log(err.message));
