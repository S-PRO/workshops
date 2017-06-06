import React, { Component } from 'react'

export class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      'name': '',
      'text': '',
      'timestamp': Date.now()
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.name}
            onChange={event => this.handleChangeName(event)} />

          <input
            value={this.state.text}
            onChange={event => this.handleChangeText(event)} />

          <button>submit</button>
        </form>
      </div>
    )
  }

  handleChangeName(event) {
    this.setState({ 'name': event.target.value })
  }

  handleChangeText(event) {
    this.setState({ 'text': event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault()
    var comment = {
      'name': this.state.name,
      'text': this.state.text,
      'timestamp': Date.now(),
    }
    this.props.addComment(comment)
  }
}
