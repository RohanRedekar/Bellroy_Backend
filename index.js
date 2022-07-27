const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
const productsController = require("./src/controllers/products.controller");
const productController = require("./src/controllers/product.controller");


app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get("", (req, res) => {
  try {
    res.send("homepage");
  } catch (error) {
    res.send(error);
  }
});

// app.use((req, res, next) => {
//   try {
//     const ip = req.ip;
//     User.findOne({ ip_adress: ip }).then((userInDB) => {
//       req.user = userInDB;
//       next();
//     });
//   } catch (err) {
//     return res.status(500).send(err);
//   }
// });

app.use("/products", productsController);
app.use("/product", productController);
app.use("/fetchCart", fetchCart);

module.exports = app;
