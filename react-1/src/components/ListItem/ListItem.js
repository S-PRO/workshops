import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Cross } from './../';

export default class ListItem extends Component {

  static propTypes = {
    onRemoveClick: PropTypes.func,
    text: PropTypes.string
  }

  static defaultProps = {
    text: 'undefined item name',
    onRemoveClick: () => console.log('OnClick')
  }

  render() {

    const { text, onRemoveClick } = this.props;

    return (
      <li>
        {text}
        <Cross onClick={onRemoveClick} />
      </li>
    )
  }
}