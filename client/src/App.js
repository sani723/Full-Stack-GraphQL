import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import TweetList from './components/TweetList';
import AddTweet from './components/AddTweet';


// Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <div className="left-bar">
            <h1>Latest Tweets</h1>
            <TweetList />
          </div>
          <div className="right-bar">
            <AddTweet />
          </div>

        </div>
      </ApolloProvider>
    );
  }
}

export default App;
