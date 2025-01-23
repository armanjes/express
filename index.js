/*
Express.js is a minimal and flexible Node.js web framework that simplifies building web applications and APIs.
*/

/*
🚀 HTTP Methods
✔ GET → Fetch Data
✔ POST → Create Data
✔ PUT → Update Entire Data
✔ PATCH → Update Partial Data
✔ DELETE → Remove Data
*/

import express from "express";
const app = express();

/*
🚀 What is middleware?
Middlewares are functions that executes during request and response cycle.Every time a request is made, it goes through a middleware pipeline before reaching the response.
express.json() → Parses incoming JSON data.
express.urlencoded({ extended: true }) → Parses form data.
express.static({ extended: true }) → Serves static files such as html, css, JS, photos, fonts, videos and other assets.

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

app.use(express.json()); // Middleware to parse JSON for POST, PUT & PATCH requests
app.use(express.urlencoded({ extended: true })); // Middleware for form input

app.get("/", (req, res) => {
  res.send("Hello world, This is home page");
});

/*
🚀 req (Request) res (Response) are objects.
1️⃣ The req object contains info about them http request sent by client.
⭐ req.body 👉 Contains data form a POST or PUT request.
⭐ req.params 👉 Gets route parameters used in dynamic routes.
⭐ req.query 👉 Gets query parameters from the URL.
⭐ req.headers 👉 Contains request headers (e.g., Authorization).
⭐ req.method 👉 HTTP method used in the request.

2️⃣ The res object used for sending response back to client.
⭐ req.send() 👉 Sends a tex response
⭐ req.json() 👉 Sends a json response
⭐ req.status() 👉 Sets HTTP status code
⭐ req.redirect() 👉 Redirects to another url
⭐ req.setHeaders() 👉 Set custom headers

req.body 	 Used to send data in POST, PUT, PATCH requests.
req.params 	 Used to get dynamic values from the URL.
*/

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  res.status(200).json({ name, email });
});

app.get("/user/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Fetching data from ${id}`);
});

// 🚀 joi data validation
import Joi from "joi";

const validateRegistration = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(15),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(15).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

app.post("/api/register", validateRegistration, (req, res) => {
  try {
    return res.status(200).json({ message: "User was created!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const validateLogin = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(15).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
};

app.post("/api/login", validateLogin, (req, res) => {
  try {
    return res.status(200).json({ message: "User Logged in" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("server running!"));
