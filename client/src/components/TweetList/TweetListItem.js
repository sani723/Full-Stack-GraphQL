import React, { Component } from 'react';

class TweetListItem extends Component {

  render() {

    return (
      this.props.data.getTweets.map( (item, index) => (
        <li key={item.id}>
          <img className="avatar" src={item.author.avatar_url} alt="GraphQL" />
          <h3>{item.body}</h3>
          <p>{item.author.username} - {item.author.full_name}</p>
        </li>
      ))
    );
  }
}

export default TweetListItem;
