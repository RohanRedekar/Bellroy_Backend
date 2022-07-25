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

router.get("/:producttype", async (req, res) => {
  try {
    switch (req.params.producttype) {
      case "Wallets":
        const wallets = await Product.find({ type: "wallet" }).lean().exec();
        return res.status(201).send({ wallets });
      case "Bags":
        const bags = await Product.find({ type: "bag" }).lean().exec();
        return res.status(201).send({ bags });
      case "Accessories":
        const accessories = await Product.find({ type: "accessories" })
          .lean()
          .exec();
        return res.status(201).send({ accessories });
      case "Tech":
        const tech = await Product.find({ type: "tech" }).lean().exec();
        return res.status(201).send({ tech });
      case "Travel":
        const travel = await Product.find({ type: "travel" }).lean().exec();
        return res.status(201).send({ travel });
      default:
        return null;
    }
  } catch (err) {
    return res.status(500).send({ mesaage: error.message });
  }
});

module.exports = router;
