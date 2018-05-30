import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import TweetList from './components/TweetList';


// Apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="main">
          <h1>Latest Tweets</h1>
          <TweetList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;