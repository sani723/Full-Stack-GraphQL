const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statSchema = new Schema({
  tweet_id: Schema.Types.ObjectId,
  views: Number,
  likes: Number,
  retweets: Number,
  responses: Number
});

module.exports = mongoose.model("Stat", statSchema);
