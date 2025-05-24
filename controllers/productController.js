import { Product } from "../models/productSchema.js";

// create
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({ ok: true, product });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// read
export const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json({ ok: true, product });
  } catch (error) {
    res.status(404).json(err.message);
  }
};

// delete
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ ok: true, product });
  } catch (err) {
    res.status(404).json(err.message);
  }
};

// update
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({ ok: true, product });
  } catch (err) {
    res.status(404).json(err.message);
  }
};
