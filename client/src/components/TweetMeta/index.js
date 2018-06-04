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
                    if(data.getTweet){
                      //console.log(data.getTweet.stats[0].views);
                    }

                    if(loading) return <Fetching />;
                    if(error) return `Error!: ${error}`;
                    const {views, responses, retweets, likes} = data.getTweet.stats[0];
                    return (
                      <Fragment>
                        <p>{data.getTweet.body}</p>
                        <p>{ views } - { responses } - { retweets } - { likes }</p>
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
