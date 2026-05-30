const cors = require("cors");
const express = require("express");
const app = express();

app.use(
  cors({
    origin: ["http://localhost:57391", "http://127.0.0.1:57391"],
  }),
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Laptop", price: 1299 },
    { id: 2, name: "Mouse", price: 50 },
  ]);
});

app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);

  const products = [
    { id: 1, name: "Laptop", price: 1299 },
    { id: 2, name: "Mouse", price: 50 },
  ];

  const requestedProduct = products.find((product) => product.id === id);
  res.json(requestedProduct);
});

app.get("/message", (req, res) => {
  res.json({ message: "Hello from your Express backend" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
