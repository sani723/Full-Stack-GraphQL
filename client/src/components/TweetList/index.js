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
        full_name
        avatar_url
      }
    }
  }
`;

class TweetList extends Component {
  render() {
    return(
      <div className="wrapper">

        <Query query={GET_TWEET} notifyOnNetworkStatusChange>

          {
            ({loading, error, data, refetch, networkStatus}) => {
              if (networkStatus === 4) return "Refetching...";
              if(loading) return <Fetching />;
              if(error) return <p>Error :( {error}</p>;

              return (
                <Fragment>
                  <button onClick={() => refetch()}>Refetch!</button>
                  <ul id="tweets-list">
                    <TweetListItem data={data} />
                  </ul>
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
