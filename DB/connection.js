const mongoose = require("mongoose");

exports.db = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection established");
    })
    .catch((err) => {
      console.log(err);
    });
};
