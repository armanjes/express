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
app.use(express.json()); // Middleware to parse JSON for POST, PUT & PATCH requests

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("server running!"));
