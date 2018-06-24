// @flow

import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import TweetList from './components/TweetList';
import AddTweet from './components/AddTweet';
import TweetMeta from './components/TweetMeta';



// Local State management Starts here
const defaults = {
    selectedTweetId: '5b0f7736a930f255ec5cdd41'
};


const typeDefs = `
  type Query {
    selectedTweetId: String
  }
`;


const resolvers = {

};
// Local State management Ends here




// Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  clientState: {
    defaults,
    resolvers,
    typeDefs
  }
});

class App extends Component<{}> {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <div className="left-bar">
            <div className="create-tweet">
              <AddTweet />
            </div>
            <h1>Latest Tweets</h1>
            <TweetList />
          </div>
          <div className="right-bar">
            <TweetMeta />
          </div>

        </div>
      </ApolloProvider>
    );
  }
}

export default App;
