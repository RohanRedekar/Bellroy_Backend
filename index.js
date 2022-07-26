const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const productsController = require("./src/controllers/products.controller");
const productController = require("./src/controllers/product.controller");
const register = require("./src/controllers/user.controller");
const {
  addToCart,
  getCart,
  deleteInCart,
} = require("./src/controllers/cart.controller");
const User = require("./src/models/user.model");

app.use(cors());

app.get("", (req, res) => {
  try {
    res.send("homepage");
  } catch (error) {
    res.send(error);
  }
});

app.use((req, res, next) => {
  try {
    const ip = req.ip;
    User.findOne({ ip_adress: ip }).then((userInDB) => {
      req.user = userInDB;
      next();
    });
  } catch (err) {
    return res.status(500).send(err);
  }
});

app.use("/products", productsController);
app.use("/product", productController);
app.use("/register", register);
app.use("/add-to-cart", addToCart);
app.use("/get-cart", getCart);
app.use("/delete-in-cart", deleteInCart);

module.exports = app;
