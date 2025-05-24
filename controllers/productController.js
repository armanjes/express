import { Product } from "../models/productSchema.js";

// 🚀 CREATE Product
export const createProduct = async (req, res) => {
  const exists = await Product.findOne(req.body);
  if (exists) {
    const error = new Error("Product already exists.");
    error.status = 409;
    throw error;
  }

  const product = await Product.create(req.body);
  res.status(201).json({ ok: true, product });
};

// 📦 READ All Products
export const getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.status(200).json({ ok: true, products });
};

// 🗑️ DELETE Product by ID
export const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    const error = new Error("Product not found.");
    error.status = 404;
    throw error;
  }

  res.status(200).json({ ok: true, product });
};

// 🔁 UPDATE Product by ID
export const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    const error = new Error("Product not found.");
    error.status = 404;
    throw error;
  }

  res.status(200).json({ ok: true, product });
};
