/*
✅ What is Express Router?
Express router is a mini verson of the express application. It allows to create modular, mountable handlers. It is a way to organize our routes in a sparate files instead of crammping everything into index.js file.

🧠 Real-life analogy:
Imagine your Express app as a library, and each router is a department — like the "History" section, the "Science" section, etc. Each department has its own entrance and handles its own internal organization.
*/

import express from "express";
const router = express.Router();
import {getUsers, createUser} from "../controllers/getUsers.js"

router.get("/", getUsers);
router.post("/", createUser);

export default router;
