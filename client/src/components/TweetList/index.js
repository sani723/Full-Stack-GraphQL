import React, { Component, Fragment } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Fetching from '../Fetching';
import TweetListItem from './TweetListItem';

const GET_TWEET = gql`
  {
    getTweets {
      id
      body
      author {
        username
        avatar_url
      }
    }
  }
`;

class TweetList extends Component {
  render() {
    return(
      <div className="wrapper">

        <Query query={GET_TWEET}>

          {
            ({loading, error, data, refetch}) => {

              if(loading) return <Fetching />;
              if(error) return <p>Error :( {error}</p>;

              return (
                <Fragment>
                  <ul id="tweets-list">
                    <TweetListItem data={data} />
                  </ul>
                  <button onClick={() => refetch()}>Refetch!</button>
                </Fragment>
              );

            }
          }

        </Query>



      </div>
    );
  }
}


export default TweetList;
