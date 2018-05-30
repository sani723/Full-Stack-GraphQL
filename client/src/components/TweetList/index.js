import React, { Component, Fragment } from 'react';
import { Query } from "react-apollo";
import Fetching from '../Fetching';
import TweetListItem from './TweetListItem';
import { GET_TWEETS } from '../../queries';

class TweetList extends Component {
  render() {
    return(
      <div className="wrapper">

        <Query query={GET_TWEETS} notifyOnNetworkStatusChange>

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
