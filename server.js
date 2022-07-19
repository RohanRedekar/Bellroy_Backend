const app = require("./index");
const connect = require("./src/configs/db");
require("dotenv").config();
const Port = process.env.PORT || 6000;

app.listen(Port, async () => {
  try {
    await connect();
    console.log(`Listening on port ${Port}`);
  } catch (err) {
    console.log(err);
  }
});
