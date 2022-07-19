const express = require("express");
const app = express();
app.use(express.json());

const walletController = require("./src/controllers/wallet.controller");


app.get("", (req, res) => {
    try {
        res.send("homepage");
    } catch (error) {
        res.send(error);
    }
});

app.use("/wallets", walletController);

module.exports = app;
