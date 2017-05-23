import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CrossIcon from 'react-icons/lib/go/x';

import './cross.css'

export default class Cross extends Component {

  static propTypes = {
    onClick: PropTypes.func
  }

  static defaultProps = {
    onClick: () => console.log('OnClick')
  }

  render() {
    return <CrossIcon className="app-cross" onClick={this.props.onClick} />
  }
}