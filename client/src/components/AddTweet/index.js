import React, { Component } from 'react';
import { Query } from "react-apollo";
import SelectItem from './SelectItem';
import { GET_AUTHORS } from '../../queries';

class AddTweet extends Component {
  render() {
    return (
      <form id="add-tweet">
        <div className="field">
          <label>Tweet</label>
          <input type="text" />
        </div>
        <div className="field">
          <label>Author</label>

          <Query query={GET_AUTHORS}>
            {
              ({loading, error, data}) => {
                if(loading) return <option disabled>Fetaching...</option>;

                return (
                  <select>
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

export default AddTweet;
