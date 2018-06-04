import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';

class TweetListItem extends Component {
  render() {
    return (
      this.props.data.getTweets.map( (item, index) => (
        <ApolloConsumer key={item.id}>
          {client => (
            <li key={item.id} onClick={ (e) => client.writeData({ data: {selectedTweetId: item.id } }) }>
              <img className="avatar" src={item.author.avatar_url} alt="GraphQL" />
              <h3>{item.body}</h3>
              <p>{item.author.username} - {item.author.full_name}</p>
            </li>
          )}
        </ApolloConsumer>
      ))
    );
  }
}

export default TweetListItem;
