const _ = require("lodash");
const TweetModel = require("../models/tweet");
const UserModel = require("../models/user");
const StatModel = require("../models/stat");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resolvers = {
  Query: {
    getTweets: (parent, args, context, info) => TweetModel.find({}),
    getTweet: (parent, args, context, info) => {
      return TweetModel.findById(mongoose.Types.ObjectId(args.id));
    },
    getUsers: (parent, args, context, info) => UserModel.find({}),
    getUser: (parent, args, context, info) => {
      return UserModel.findById(args.id);
    }
  },
  Tweet: {
    author: (parent, args, context, info) => {
      return UserModel.findById(parent.author_id);
    },
    stats: (parent, args, context, info) => {

      return StatModel.find({ tweet_id: parent.id });

      /*
      return StatModel.find({ tweet_id: parent.id }, "views likes" ,function(err, tweetMeta) {
         tweetMeta;
         console.log(tweetMeta);
      });
      */


    }
  },
  User: {
    full_name: (parent, args, context, info) => {
      return `${parent.first_name} ${parent.last_name}`
    }
  },
  Mutation: {
    createTweet: (parent, args, context, info) => {
      let tweet = new TweetModel({
        body: args.body,
        date: args.date,
        author_id: args.author_id
      });
      return tweet.save();
    },
    createUser: (parent, args, context, info) => {
      let user = new UserModel({
        username: args.username,
        first_name: args.first_name,
        last_name: args.last_name,
        avatar_url: args.avatar_url
      });
      return user.save();
    },
    createStat: (parent, args, context, info) => {
      let stat = new StatModel({
        tweet_id: args.tweet_id,
        views: args.views,
        likes: args.likes,
        retweets: args.retweets,
        responses: args.responses
      });
      return stat.save();
    },
    updateTweetMeta: (parent, args, context, info) => {

      let metaCounter = 1;
      let metaCategoryName = args.metaCategory;

      StatModel.findOne({tweet_id: args.tweetId}, `${args.metaCategory}`, function(err, results) {
        metaCounter = metaCounter + results[args.metaCategory];

        let update = {};
        let query = { tweet_id: args.tweetId };
        if(metaCategoryName === "views") {
          update = { $set: {views: metaCounter}};
        } else if(metaCategoryName === "likes") {
          update = { $set: {likes: metaCounter}};
        } else if(metaCategoryName === "retweets") {
          update = { $set: {retweets: metaCounter}};
        } else if(metaCategoryName === "responses") {
          update = { $set: {responses: metaCounter}};
        }

        let options = {new: true}
        StatModel.findOneAndUpdate(query, update, options, function(err, doc){
          
        });

      });

    },
  }
}

module.exports = resolvers;
