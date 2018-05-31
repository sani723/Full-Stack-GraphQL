import React, { Component } from 'react';
import { compose, graphql } from "react-apollo";
import SelectItem from './SelectItem';
import { GET_AUTHORS, ADD_TWEET } from '../../queries';

class AddTweet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tweetBody: '',
      tweetAuthorId: '',
      tweetPublishedDate: new Date().toJSON().slice(0,10).replace(/-/g,'/')
    };
  }

  submitHandler(e) {
    e.preventDefault();
    this.props.addTweet({
      variables: {
        body: this.state.tweetBody,
        author_id: this.state.tweetAuthorId,
        date: this.state.tweetPublishedDate
      }
    });
  }

  loadAuthors = (loading, data) => {
    if(loading) {
      return <option disabled>Fetaching...</option>;
    } else {
      return <SelectItem data={data} />;
    }
  }

  render() {
    const { loading, getUsers } = this.props.getAuthors;
    return (
      <form id="add-tweet" onSubmit={this.submitHandler.bind(this)}>
        <h1>Create Tweet</h1>
        <input type="text" onChange={(e) => this.setState({tweetBody: e.target.value})} placeholder="Tweet text" />
        <select onChange={(e) => this.setState({tweetAuthorId: e.target.value})}>
          <option value="0">Select author</option>
          {!loading && this.loadAuthors(loading, getUsers) }
        </select>

        <button>Add Tweet</button>
      </form>
    );
  }
}

export default compose(
  graphql(GET_AUTHORS, { name: "getAuthors" }),
  graphql(ADD_TWEET, { name: "addTweet" })
)(AddTweet);
