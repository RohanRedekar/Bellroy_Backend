const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.post("", async (req, res) => {
  try {
    const item = await Product.create(req.body);
    return res.status(201).send(item);
  } catch (err) {
    return res.status(500).send({ mesaage: error.message });
  }
});

router.get("/:category", async (req, res) => {
  let color = Array.isArray(req.query.filter);
  let filter = req.query.filter;
  let category = req.params.category;
  try {
    if (color) {
      let products;
      products = await Product.find({
        type: category,
        colors: { $all: filter },
      });
      return res.status(201).send({ products });
    } else {
      let products;
      products = await Product.find({ type: category });
      return res.status(201).send({ products });
    }
  } catch (err) {
    return res.status(500).send({ mesaage: err.message });
  }
});

module.exports = router;
