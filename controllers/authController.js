import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  const isMatch = await user.comparePassword(password)
  
  if (!user || !isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // Create token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  // Send token in HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: false, // true in production with HTTPS
    sameSite: "Lax",
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });

  res.json({ message: "Login successful" });
};

export const logoutController = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false, // set to true if using https
  });

  res.json({ message: "Logged out successfully" });
}

export const registerController = async (req, res) => {
  const email = await User.findOne({ email: req.body.email });
  if (email)
    return res.status(400).json({ ok: false, message: "user alredy exists!" });
  await User.create(req.body);
  res.status(201).json({ ok: true, message: "user created successfully!" });
};
