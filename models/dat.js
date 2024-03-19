const mongoose = require("mongoose");


const datal = new mongoose.Schema({
  username: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
  },
});
const dat = mongoose.model("christeenajoy", datal);
module.exports = dat;
