const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  first_name: String,
  last_name: String,
  avatar_url: String
});

module.exports = mongoose.model("User", userSchema);
