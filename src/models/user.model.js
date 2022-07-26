const mongoose = require("mongoose");
const Product = require("../models/product.model");

const userSchema = new mongoose.Schema({
  ip_adress: { type: String, required: true, unique: true },
  cart: {
    cartItems: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "product",
          required: true,
        },
        qty: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: Number,
  },
});

userSchema.methods.addToCart = async function (productId) {
  const product = await Product.findById(productId);
  if (product) {
    const cart = this.cart;
    const isExisting = cart.cartItems.findIndex(
        (items) =>
        new String(items.productId).trim() === new String(product._id).trim()
    );
    if (isExisting >= 0) {
      cart.cartItems[isExisting].qty += 1;
    } else {
      cart.cartItems.push({ productId: product._id, qty: 1 });
    }
    if (!cart.totalPrice) {
      cart.totalPrice = 0;
    }
    cart.totalPrice += product.price;
    return this.save();
  }
};

userSchema.methods.removeFromCart = function (productId) {
  const cart = this.cart;
  const isExisting = cart.cartItems.findIndex(
    (items) =>
      new String(items.productId).trim() === new String(productId).trim()
  );
  if (isExisting >= 0) {
    cart.cartItems.splice(isExisting, 1);
    return this.save();
  }
};

module.exports = mongoose.model("User", userSchema);
