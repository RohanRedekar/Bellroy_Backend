const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, //Name of the product
    type: {type: String, required: true}, //wallet/bags/tech/...
    subtitle: { type: String, required: false }, //eg. RFID safe
    selectedColour: { type: String, required: true }, //default colour which will be shown on page load
    imgIndex: { type: Number, required: true }, // Index of the default image
    price: { type: Number, required: true }, // price of the product
    colouredWalletImages: [{ type: String, required: true }], //Images with different colour options
    colors: [{ type: String, required: true }], //coloures in which the product is available
    description: { type: String, required: true }, //product description 
    detailedImages: { type: Object, required: true }, //Images within single coloured product
    fullImage: { type: String, required: false }, //descriptive full image
    pointers: [{ type: String, required: true }], //Detailed description pointers about product
    specifications: [{ type: String, required: true }], //size/weight/...
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("product", ProductSchema);
