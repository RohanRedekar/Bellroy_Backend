const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
const walletController = require("./src/controllers/wallet.controller");

app.use(cors());
app.get("", (req, res) => {
    try {
        res.send("homepage");
    } catch (error) {
        res.send(error);
    }
});

app.use("/wallets", walletController);

module.exports = app;
