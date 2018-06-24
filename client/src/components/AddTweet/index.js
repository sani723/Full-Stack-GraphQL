// @flow

import * as React from 'react';
import { compose, graphql } from "react-apollo";
import SelectItem from './SelectItem';
import { GET_AUTHORS, ADD_TWEET, GET_TWEETS } from '../../queries';

type Author = {
  id: number,
  full_name: string
}

type AuthorProps = {
  getAuthors: () => Author,
  addTweet: (variables: mixed) => void
}

type TweetState = {
  tweetBody: string,
  tweetAuthorId: string,
  tweetPublishedDate: mixed
}

//class AddTweet extends React.Component<null, TweetState> {
class AddTweet extends React.Component<AuthorProps, TweetState> {

  constructor(props) {
    super(props);
    this.state = {
      tweetBody: '',
      tweetAuthorId: '',
      tweetPublishedDate: new Date().toJSON().slice(0,10).replace(/-/g,'/')
    };
  }

  submitHandler(event: SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.props.addTweet({
      variables: {
        body: this.state.tweetBody,
        author_id: this.state.tweetAuthorId,
        date: this.state.tweetPublishedDate
      },
      refetchQueries: [ {query: GET_TWEETS} ]
    });
  }

  loadAuthors = (loading, data) => {
    if(loading) {
      return <option disabled>Fetching...</option>;
    } else {
      return <SelectItem data={data} />;
    }
  }

  render() {

    const { loading, getUsers } = this.props.getAuthors;
    return (
      <form id="add-tweet" onSubmit={this.submitHandler.bind(this)}>
        <p><input type="text" id="txtTweetBody" onChange={(e) => this.setState({tweetBody: e.target.value})} placeholder="Tweet text" /></p>
        <p>
          <select onChange={(e) => this.setState({tweetAuthorId: e.target.value})}>
            <option value="0">Select author</option>
            {!loading && this.loadAuthors(loading, getUsers) }
          </select>
        </p>
        <p><button>Tweet</button></p>
      </form>
    );
  }
}

export default compose(
  graphql(GET_AUTHORS, { name: "getAuthors" }),
  graphql(ADD_TWEET, { name: "addTweet" })
)(AddTweet);
