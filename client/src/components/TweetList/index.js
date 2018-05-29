import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import TweetListItem from './TweetListItem';

const GET_TWEET = gql`
  {
    getTweets {
      id
      body
      author {
        full_name
      }
    }
  }
`;

class TweetList extends Component {
  render() {
    return(
      <div className="wrapper">
        <ul id="tweets-list">


          <Query query={GET_TWEET}>
            {

              ({loading, error, data}) => {

                if(loading) return <p>Loading...</p>;
                if(error) return <p>Error :( {error}</p>;

                return <TweetListItem data={data} />


              }
            }
          </Query>

        </ul>
      </div>
    );
  }
}


export default TweetList;
