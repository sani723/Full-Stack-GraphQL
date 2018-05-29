const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema({
  body: String,
  date: Date,
  author_id: String
});

module.exports = mongoose.model("Tweet", tweetSchema);
