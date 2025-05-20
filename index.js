/*
📌 Express.js is a minimal and flexible Node.js web application framework
that simplifies web application and API development.

🔸 HTTP (HyperText Transfer Protocol) methods define the type of action performed on the server:

  ✅ GET     → Retrieve data (Read)
  ✅ POST    → Submit data (Create)
  ✅ PUT     → Update data completely (Replace)
  ✅ PATCH   → Update data partially (Modify)
  ✅ DELETE  → Remove data (Delete)

🔹 The `req` (request) object contains everything sent from the client (browser) to the server:

  ⭐ req.body     → Contains data from POST or PUT requests (Requires middleware like express.json()).
  ⭐ req.params   → Retrieves route parameters from dynamic URLs (e.g., /user/:id).
  ⭐ req.query    → Retrieves query parameters from the URL (e.g., /search?q=keyword).
  ⭐ req.headers  → Accesses request headers (e.g., Authorization, Content-Type).
  ⭐ req.method   → Returns the HTTP method used (e.g., GET, POST).

🔹 The `res` (response) object is used to send data from the server back to the client:

  ⭐ res.send()       → Sends a plain text or HTML response.
  ⭐ res.json()       → Sends a JSON response.
  ⭐ res.status()     → Sets the HTTP status code.
  ⭐ res.redirect()   → Redirects the client to a different URL.
  ⭐ res.setHeader()  → Sets custom response headers.
*/

import express from "express";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("this is get route");
});

app.get("/:name", (req, res) => {
  res.send(`name is: ${req.params.name}`);
});

app.post("/submit", (req, res) => {
  res.send("this is post route");
});

app.listen(PORT, () => console.log("localhost:3000"));
