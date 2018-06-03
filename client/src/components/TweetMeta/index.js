import React, { Component, Fragment } from 'react';
import { Query } from "react-apollo";
import Fetching from '../Fetching';
import { GET_TWEET_META, GET_SELECTED_TWEET_ID } from '../../queries';

class TweetMeta extends Component {
  render() {
    return (
      <div className="tweet-meta">
        <p>Output tweet meta here</p>

        <Query query={GET_SELECTED_TWEET_ID}>
          {

            ({loading, error, data}) => (

              <Query query={GET_TWEET_META} variables={{ id: data.selectedTweetId }}>
                {

                  ({loading, error, data}) => {
                    console.log(data);
                    if(loading) return <Fetching />;
                    if(error) return `Error!: ${error}`;

                    return (
                      <Fragment>
                        <p>{data.getTweet.body}</p>
                        <p>{data.getTweet.stats.views}</p>
                      </Fragment>
                    );

                  }

                }
              </Query>

              )

          }
        </Query>





      </div>
    );
  }
}


export default TweetMeta;
