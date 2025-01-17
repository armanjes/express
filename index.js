/*
Express.js is a minimal and flexible Node.js web framework that simplifies building web applications and APIs.
*/

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world, This is home page");
});

app.get("/about", (req, res) => {
  res.send("Hi, this is about page");
});

app.listen(5000, () => console.log("server started!"));
