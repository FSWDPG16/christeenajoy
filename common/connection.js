const mongoose = require("mongoose");
const connect = () => {
  mongoose
    .connect(process.env.Mongo_url)

    .then(() => {
      console.log("mongo connected");
    })
    .catch((error) => {
      console.log(" mongo server error:", error);
    });
};

module.exports = connect;
