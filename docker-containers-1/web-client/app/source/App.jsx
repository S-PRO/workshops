import React, { Component } from 'react'
import { CommentForm } from './CommentForm.jsx'
import { CommentList } from './CommentList.jsx'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = { comments: [] }
    this.addComment = this.addComment.bind(this)
  }

  render() {
    return (
      <div>
        <CommentForm addComment={this.addComment}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }

  addComment(comment) {
    this.setState((prevState) => ({
      comments: prevState.comments.concat(comment)
    }))
  }
}
