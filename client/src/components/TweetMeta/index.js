// @flow

import * as React from 'react';
import { Query } from "react-apollo";
import Fetching from '../Fetching';
import { GET_TWEET_META, GET_SELECTED_TWEET_ID } from '../../queries';

class TweetMeta extends React.Component<{}> {
  render() {
    return (
      <div className="tweet-meta">

        <Query query={GET_SELECTED_TWEET_ID}>
          {

            ({loading, error, data}) => (

              <Query query={GET_TWEET_META} variables={{ id: data.selectedTweetId }}>
                {

                  ({loading, error, data}) => {

                    if(loading) return <Fetching />;

                    if(error) return `Error!: ${error}`;

                    const {views, responses, retweets, likes} = data.getTweet.stats[0];

                    return (
                      <React.Fragment>
                        <div className="tweet__author-avatar">
                          <img className="avatar" src={data.getTweet.author.avatar_url} alt="GraphQL" />
                        </div>
                        <h2>{data.getTweet.author.full_name}</h2>
                        <p>@{data.getTweet.author.username}</p>
                        <p>{data.getTweet.body}</p>
                        <p>{ views } - { responses } - { retweets } - { likes }</p>
                      </React.Fragment>
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
