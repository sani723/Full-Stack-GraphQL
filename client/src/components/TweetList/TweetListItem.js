import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';
import { GET_TWEET_META, UPDATE_TWEET_META } from '../../queries';

class TweetListItem extends Component {
  render() {
    return (
      this.props.data.getTweets.map( (item, index) => (
        <ApolloConsumer key={item.id}>
          {client => (
            <li
              key={item.id}
              onMouseEnter = { /*onMouseOver*/
                () => {
                  client.query( { query:GET_TWEET_META, variables: {id: item.id} } );
                  //client.query( { query: UPDATE_TWEET_META, variables: {id: item.id} } );
                  client.mutate( { mutation: UPDATE_TWEET_META, variables: {tweetId: item.id, metaCategory: "views"} } );
                }
              }
              onClick={
                () => client.writeData({ data: {selectedTweetId: item.id } })
              }
            >
              {/*<img className="avatar" src={item.author.avatar_url} alt="GraphQL" />*/}
              <h3>{item.body}</h3>
              {/*<p>{item.author.username} - {item.author.full_name}</p>*/}
            </li>
          )}
        </ApolloConsumer>
      ))
    );
  }
}

export default TweetListItem;
