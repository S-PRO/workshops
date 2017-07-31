import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';


export default props => (
  <div>
    <h4>
      <Link to={`/article/${props.id}`} >{props.title}</Link>
    </h4>
    <span className="glyphicon glyphicon-user" />
    &nbsp;
    <strong>{props.author}</strong>
    &nbsp;
    {moment().from(props.timestamp)}
  </div>
)