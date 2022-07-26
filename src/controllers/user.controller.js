const User = require("../models/user.model");

const register = async (req, res) => {
  try {
    const ip = req.ip;
    let user = await User.findOne({ ip_adress: ip });

    if (user) {
      return res.status(500).send("User already exists");
    }
    req.body.ip_adress = ip;
    user = await User.create(req.body);

    return res.status(200).send(user);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports = register;
