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

export {GET_TWEETS, GET_AUTHORS};
