const { gql } = require("apollo-server");

const typeDefs = gql`

  # Tweet type
  type Tweet {
    id: ID! # Unique id for tweet
    body: String # The tweet text. No more than 140 characters!
    date: Date # When the tweet was published
    author: User # Who published the tweet
    stats: Stat # Views, retweets, likes etc.
  }

  # User type
  type User {
    id: ID! # Unique id for user
    username: String
    first_name: String
    last_name: String
    full_name: String
    avatar_url: Url
  }

  # Stat type
  type Stat {
    views: Int
    likes: Int
    retweets: Int
    responses: Int
  }

  scalar Url
  scalar Date

  type Query {
    getTweet(id: ID): Tweet
    getTweets(limit: Int, sortField: String, sortOrder: String): [Tweet]
    getUsers: [User]
    getUser(id: ID): User
  }

  type Mutation {
    createTweet(body: String, date: Date, author_id: ID): Tweet
    createUser(username: String, first_name: String, last_name: String, avatar_url: String): User
    createStat(tweet_id: ID, views: Int, likes: Int, retweets: Int, responses: Int): Stat
  }

`;


module.exports = typeDefs;
