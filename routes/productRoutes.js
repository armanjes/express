import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/productController.js";
import { validateProduct } from "../validators/productValidator.js";
const router = express.Router();

router.post("/", validateProduct, createProduct);
router.get("/", getAllProducts);
router.delete("/:id", deleteProduct);
router.patch("/:id", validateProduct, updateProduct);

export default router;
