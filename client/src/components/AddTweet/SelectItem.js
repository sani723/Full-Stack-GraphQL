// @flow

import * as React from 'react';

type Tweet = {
  id: number,
  full_name: string
}

type ItemProp = {
  data: Array<Tweet>
}

class SelectItem extends React.Component<ItemProp> {

  render() {

    return (
      this.props.data.map( (item, index) => (
        <option key={item.id} value={item.id}>{item.full_name}</option>
      ))
    );
  }
}

export default SelectItem;
