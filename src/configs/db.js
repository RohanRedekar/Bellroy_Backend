const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    `mongodb+srv://RohansDatabase:bestRandomData00@cluster0.2evx1.mongodb.net/bellroy?retryWrites=true&w=majority`
  );
};

module.exports = connect;
