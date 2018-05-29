const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statSchema = new Schema({
  tweet_id: String,
  views: Number,
  likes: Number,
  retweets: Number,
  responses: Number
});

module.exports = mongoose.model("Stat", statSchema);
