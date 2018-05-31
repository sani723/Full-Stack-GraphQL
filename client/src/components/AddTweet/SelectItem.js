import React, { Component } from 'react';

class SelectItem extends Component {

  render() {

    return (
      this.props.data.map( (item, index) => (
        <option key={item.id} value={item.id}>{item.full_name}</option>
      ))
    );
  }
}

export default SelectItem;
