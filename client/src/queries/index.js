import gql from "graphql-tag";

const GET_AUTHORS = gql`
  {
    getUsers {
      id
      full_name
    }
  }
`;


const GET_TWEETS = gql`
  {
    getTweets {
      id
      body
      author {
        username
        full_name
        avatar_url
      }
    }
  }
`;


const GET_TWEET_META = gql`
  query getTweet($id: ID!){
    getTweet(id: $id) {
      body
      author {
        username
      }
      stats {
        views
        likes
        responses
        retweets
      }
    }
  }
`;


const ADD_TWEET = gql`
  mutation createTweet($body: String!, $author_id: ID!, $date: Date) {
    createTweet(body: $body, author_id:$author_id, date: $date){
      id
    }
  }
`;



const GET_SELECTED_TWEET_ID = gql`
  {
    selectedTweetId @client
  }
`;

export {GET_TWEETS, GET_AUTHORS, ADD_TWEET, GET_TWEET_META, GET_SELECTED_TWEET_ID};
