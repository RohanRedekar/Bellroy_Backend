const express = require("express");
const router = express.Router();
const Wallet = require("../models/wallet.model");
const Accessories = require("../models/accesories.model");
const Bag = require("../models/bag.model");
const Tech = require("../models/tech.model");
const Travel = require("../models/travel.model");

router.post("/:producttype", async (req, res) => {
  try {
    switch (req.params.producttype) {
      case "Wallets":
        const item = await Wallet.create(req.body);
        return res.status(201).send(item);
      case "Bags":
        const bag = await Bag.create(req.body);
        return res.status(201).send(bag);
      case "Accessories":
        const accessories = await Accessories.create(req.body);
        return res.status(201).send(accessories);
      case "Tech":
        const tech = await Tech.create(req.body);
        return res.status(201).send(tech);
      case "Travel":
        const travel = await Travel.create(req.body);
        return res.status(201).send(travel);
      default:
        return null;
    }
  } catch (err) {
    return res.status(500).send({ mesaage: error.message });
  }
});

router.get("/:producttype", async (req, res) => {
  try {
    switch (req.params.producttype) {
      case "Wallets":
        const wallets = await Wallet.find().lean().exec();
        return res.status(201).send({ wallets });
      case "Bags":
        const bags = await Bag.find().lean().exec();
        return res.status(201).send({ bags });
      case "Accessories":
        const accessories = await Accessories.find().lean().exec();
        return res.status(201).send({ accessories });
      case "Tech":
        const tech = await Tech.find().lean().exec();
        return res.status(201).send({ tech });
      case "Travel":
        const travel = await Travel.find().lean().exec();
        return res.status(201).send({ travel });
      default:
        return null;
    }
  } catch (err) {
    return res.status(500).send({ mesaage: error.message });
  }
});

module.exports = router;
