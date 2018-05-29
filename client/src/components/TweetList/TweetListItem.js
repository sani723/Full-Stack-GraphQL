import React, { Component } from 'react';

class TweetListItem extends Component {

  render() {
    return (
      this.props.data.getTweets.map( (item, index) => (
        <li key={item.id}>{item.body} - {item.author.full_name}</li>
      ))
    );
  }
}


export default TweetListItem;
