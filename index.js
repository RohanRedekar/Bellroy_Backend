const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const productsController = require("./src/controllers/products.controller");
const productController = require("./src/controllers/product.controller");

app.use(cors());
app.get("", (req, res) => {
    try {
        res.send("homepage");
    } catch (error) {
        res.send(error);
    }
});

app.use("/products/category", productsController);
app.use("/product", productController)

module.exports = app;
