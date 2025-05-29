import User from "../models/userModel.js";
import { sendToken } from "../utils/sendToken.js";

export const registerController = async (req, res) => {
  const email = await User.findOne({ email: req.body.email });

  if (email)
    return res.status(400).json({ ok: false, message: "user alredy exists!" });

  const user = await User.create(req.body);
  sendToken(user, res);
  res.status(201).json({ ok: true, message: "user created successfully!" });
};

export const loginController = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log("login controller: ", user);
  const isMatch = await user.comparePassword(password);

  if (!user || !isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  sendToken(user, res);
  res.json({ message: "Login successful" });
};

export const logoutController = async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out successfully" });
};
