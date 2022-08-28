// const User = require("../models/user.model");
const Product = require("../models/product.model");

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

const fetchCart = async (req, res, next) => {
  const payload = req.query.payload;
  if (payload === undefined) {
    return res.status(201).send([]);
  }
  let data = [];
  if (payload.length > 0) {
    for (let i = 0; i < payload.length; i++) {
      let { id, count, color } = JSON.parse(payload[i]);
      let res = await Product.findOne({ _id: id }).lean().exec();
      for (let j = 0; j < res.colors.length; j++) {
        // check which coloured product is added to the cart
        if (color === res.colors[j]) res.imgIndex = j;
      }
      res.count = count;
      data.push(res);
    }
  }
  return res.status(201).send(data);
};

module.exports = fetchCart;
