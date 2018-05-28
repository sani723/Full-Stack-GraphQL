const _ = require("lodash");

// Dummy data
const tweetsList = [
    { id: 1, body: 'Lorem Ipsum', date: new Date(), author_id: 10 },
    { id: 2, body: 'Sic dolor amet', date: new Date(), author_id: 11 },
    { id: 3, body: 'Bale awesome goal', date: new Date(), author_id: 11 },
    { id: 4, body: 'Ronaldo to leave Real Madrid', date: new Date(), author_id: 12 },
    { id: 5, body: 'Mo Saleh is out for the season', date: new Date(), author_id: 12 },
    { id: 6, body: 'Liverpool lost final to Real', date: new Date(), author_id: 13 },
];
const authorsList = [
    { id: 10, username: 'johndoe', first_name: 'John', last_name: 'Doe', avatar_url: 'john.com/avatars/10' },
    { id: 11, username: 'janedoe', first_name: 'Jane', last_name: 'Doe', avatar_url: 'jane.com/avatars/11' },
    { id: 12, username: 'sani723', first_name: 'Sajjad', last_name: 'Haider', avatar_url: 'sajjad.com/avatars/12' },
    { id: 13, username: 'malik', first_name: 'Sohaib', last_name: 'Malik', avatar_url: 'malik.com/avatars/13' },
];
const statsList = [
    { tweet_id: 1, views: 123, likes: 4, retweets: 1, responses: 0 },
    { tweet_id: 2, views: 234, likes: 45, retweets: 63, responses: 6 },
    { tweet_id: 3, views: 878, likes: 95, retweets: 23, responses: 16 },
    { tweet_id: 4, views: 222, likes: 25, retweets: 78, responses: 22 },
    { tweet_id: 5, views: 878, likes: 15, retweets: 22, responses: 34 },
    { tweet_id: 6, views: 1987, likes: 345, retweets: 763, responses: 106 },
];


const resolvers = {
  Query: {
    getTweets: (parent, args, context, info) => tweetsList,
    getTweet: (parent, args, context, info) => {
      return _.find(tweetsList, { id: args.id });
    }
  }
}

module.exports = resolvers;
