import React from 'react'

export function CommentList(props) {
  return (
    <div>
        <p>Comments:</p>

        <ul>
          {props.comments.map(comment => (
            <li key={comment.timestamp}>{comment.name}: {comment.text}</li>
          ))}
        </ul>
    </div>
  )
}
