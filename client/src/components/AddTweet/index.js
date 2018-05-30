import React, { Component } from 'react';
import { Query } from "react-apollo";
import { Mutation, compose, graphql } from "react-apollo";
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

  render() {
    //console.log(this.props.getAuthors.getUsers);
    return (
      <form id="add-tweet" onSubmit={this.submitHandler.bind(this)}>
        <div className="field">
          <label>Tweet</label>
          <input type="text" onChange={(e) => this.setState({tweetBody: e.target.value})} />
        </div>
        <div className="field">
          <label>Author</label>

          <Query query={GET_AUTHORS}>
            {
              ({loading, error, data}) => {

                if(loading) return <option disabled>Fetaching...</option>;

                return (
                  <select onChange={(e) => this.setState({tweetAuthorId: e.target.value})}>
                    <option value="0">Select author</option>
                    <SelectItem data={data} />
                  </select>
                )

              }
            }
          </Query>


        </div>
        <div className="field">
          <button>Add Tweet</button>
        </div>
      </form>
    );
  }
}

export default compose(
  graphql(GET_AUTHORS, { name: "getAuthors" }),
  graphql(ADD_TWEET, { name: "addTweet" })
)(AddTweet);
