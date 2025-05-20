/*
🚀 What is middleware?
Middlewares are functions that executes during request and response cycle.Every time a request is made, it goes through a middleware pipeline before reaching the response. It has access to req and res body.

express.json() → Parses incoming JSON data.
express.urlencoded({ extended: true }) → Parses form data.
express.static('public') → Serves static files such as html, css, JS, photos, fonts, videos and other assets.

Middleware can be applied:
1️⃣ Globally → app.use(middleware) (Runs on all routes).
2️⃣ Specific Routes → app.get("/route", middleware, handler).

🚀 Custom Middleware
1. It has three parameters (req, res, next)
2. next() (Function) → Passes control to the next middleware or route.

✔ Custom middleware is used for logging, authentication, request timing, etc.
✔ Must call next() to continue execution.
✔ Can be applied globally or to specific routes.
*/

import express from "express";
const app = express();

// Middleware to parse JSON for POST, PUT & PATCH requests
app.use(express.json());
// Middleware for form input
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello world, This is home page");
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  res.status(200).json({ name, email });
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Fetching data from ${id}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("server running!"));
