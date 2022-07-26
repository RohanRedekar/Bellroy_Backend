// const User = require("../models/user.model");

// const addToCart = (req, res, next) => {
//   User.findOne({ ip_adress: ip })
//     .then((dbUser) => {
//       dbUser.addToCart(req.body.id);
//     })
//     .then(() => {
//       return res.status(201).send("added to cart successfully");
//     })
//     .catch((err) => console.log(err));
// };

// const getCart = (req, res, next) => {
//   req.user
//     .populate("cart.items.productId")
//     .lean()
//     .exec()
//     .then((user) => console.log(user))
//     .catch((err) => console.log(err));
// };

// const deleteInCart = (req, res, next) => {
//   req.user
//     .removeFromCart(req.body.prodId)
//     .then(() => {
//       return res.status(201).send("removed from cart successfully");
//     })
//     .catch((err) => console.log(err));
// };

// module.exports = { addToCart, getCart, deleteInCart };
