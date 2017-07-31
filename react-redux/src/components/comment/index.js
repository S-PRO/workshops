import React from 'react';
import moment from 'moment';

export default props => (
  <div>
    <div>
      <span className="glyphicon glyphicon-user" />
      &nbsp;
      <strong>{props.author}</strong>
      &nbsp;
      {moment().from(props.timestamp)}
    </div>
    <p>
      {props.content}
    </p>
  </div>
)