import React, { Component, Fragment } from 'react';
import { Query } from "react-apollo";
import Fetching from '../Fetching';
import TweetListItem from './TweetListItem';
import { GET_TWEETS } from '../../queries';

class TweetList extends Component {
  render() {
    return(
      <div className="wrapper">

        <Query
          query = {GET_TWEETS}
          variables = {{
            offset: 0,
            limit: 5
          }}
          notifyOnNetworkStatusChange
        >

          {
            ({loading, error, data, refetch, networkStatus, fetchMore}) => {
              if (networkStatus === 4) return "Refetching...";
              if(loading) return <Fetching />;
              if(error) return <p>Error :( {error}</p>;

              return (
                <Fragment>
                  <div className="cta">
                    <button onClick={() =>
                      refetch()}
                    >
                      Refetch!
                    </button>
                    <button onClick={() =>
                      fetchMore({
                        variables: {
                          offset: data.getTweets.length
                        },
                        updateQuery: (prev, {fetchMoreResult}) => {
                          if (!fetchMoreResult) return prev;
                          return Object.assign({}, prev, {
                            getTweets: [...prev.getTweets, ...fetchMoreResult.getTweets]
                          });
                        }
                      })
                    }
                    >
                      Next
                    </button>
                  </div>

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
