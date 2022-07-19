const express = require("express");
const router = express.Router();
const Wallet = require("../models/wallet.model");
const crudController = require("./crud.controller");

router.post("", crudController.post(Wallet));

router.get("", async (req, res) => {
  try {
    const wallet = await Wallet.find().lean().exec();

    return res.status(201).send({ wallet });
  } catch (err) {
    return res.status(500).send({ mesaage: error.message });
  }
});

module.exports = router
