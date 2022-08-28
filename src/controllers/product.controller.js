const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

router.get("/:title", async (req, res) => {
  try {
    const title = req.params.title.split("-").join(" "); //folio-mini => folio mini
    const wallet = await Product.find({ title: title });
    return res.status(201).send(wallet);
  } catch (err) {
    return res.status(500).send({ mesaage: error.message });
  }
});

module.exports = router;
