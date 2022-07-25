const express = require("express");
const router = express.Router();
const Wallet = require("../models/wallet.model");
const Accessories = require("../models/accesories.model");
const Bag = require("../models/bag.model");
const Tech = require("../models/tech.model");
const Travel = require("../models/travel.model");

router.get("/:category/:title", async (req, res) => {
  try {
    const title = req.params.title.split("-").join(" ");
    switch (req.params.category) {
      case "Wallets":
        const wallet = await Wallet.find({ title: title });
        return res.status(201).send(wallet);
      case "Bags":
        const bag = await Bag.find({ title: title });
        return res.status(201).send(bag);
      case "Accessories":
        const accessories = await Accessories.find({ title: title });
        return res.status(201).send(accessories);
      case "Tech":
        const tech = await Tech.find({ title: title });
        return res.status(201).send(tech);
      case "Travel":
        const travel = await Travel.find({ title: title });
        return res.status(201).send(travel);
      default:
        return null;
    }
  } catch (err) {
    return res.status(500).send({ mesaage: error.message });
  }
});

module.exports = router;
