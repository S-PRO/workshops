import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextForm extends Component {

  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  static defaultProps = {}

  onChangeHandler = e => this.setState({ value: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  }

  render() {

    return (
      <form onSubmit={this.onSubmitHandler}>
        <input 
          type="text" 
          value={this.state.value} 
          onChange={this.onChangeHandler} 
        />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}