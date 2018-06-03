import React, { Component } from 'react';
import { Query } from "react-apollo";
import Fetching from '../Fetching';
import { GET_TWEET_META } from '../../queries';

class TweetMeta extends Component {
  render() {
    const id = '';
    return (
      <div className="tweet-meta">
        <p>Output tweet meta here</p>
        <Query query={GET_TWEET_META} variables={ id }>
          {

            ({loading, error, data}) => {

              if(loading) return <Fetching />;
              if(error) return <p>Error :( {error}</p>;

              return (
                data.map(item => {
                  return <p>{item.views}</p>
                })
              );

            }

          }
        </Query>
      </div>
    );
  }
}


export default TweetMeta;
