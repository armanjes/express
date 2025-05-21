/*
✅ What are Controllers?
Controllers are just functions that contain logic for handling requests

🧠 Analogy:
Think of routes as waiters in a restaurant and controllers as chefs. The waiter takes the order (route), passes it to the chef (controller), and brings the response back to the customer (client).
*/

export const getUsers = (req, res) => {
  res.send("this is getUsers route");
};

export const createUser = (req, res) => {
  res.send("this is createUser route");
};
