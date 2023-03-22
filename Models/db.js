const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/tripo_test?retryWrites=true&w=majority")
    .then((_) => console.log("connected to mongodb"));
};

module.exports = connectDB;
