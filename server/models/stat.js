const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statSchema = new Schema({
  tweet_id: Number,
  views: Number,
  likes: Number,
  retweets: Number,
  responses: Number
});

module.exports = mongoose.model("Stat", statSchema);
