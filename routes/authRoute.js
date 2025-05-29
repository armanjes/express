import express from "express";
import {
  loginController,
  logoutController,
  registerController,
} from "../controllers/authController.js";
import { validateAuth } from "../validators/authValidator.js";
const router = express.Router();

router.post("/login", loginController);
router.post("/logout", logoutController);
router.post("/register", validateAuth, registerController);

export default router;
