const mongoose = require("mongoose");

const WalletSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: false },
    selectedColour: { type: String, required: true },
    imgIndex: { type: Number, required: true },
    price: { type: Number, required: true },
    colouredWalletImages: [{ type: String, required: true }],
    colors: [{ type: String, required: true }],
    description: { type: String, required: true },
    detailedImages: [{ type: Array, required: true }],
    fullImage: { type: String, required: false },
    pointers: [{ type: String, required: true }],
    specifications: [{ type: String, required: true }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("wallet", WalletSchema);
