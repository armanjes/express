import express from "express";
import { uploadMiddleware } from "../middlewares/uploadMiddleware.js";
const router = express.Router();

router.post("/upload", uploadMiddleware.single("images"), (req, res) => {
  res.status(200).json({ ok: true, message: "upload successful!" });
});

export default router;
