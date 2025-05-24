import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/productController.js";
const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);

export default router;
