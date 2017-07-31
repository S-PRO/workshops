import React from 'react';


export default (props) => {
  const {
    hasNext,
    hasPrev,
    onPageChange
  } = props;
  return (
    <nav>
      <ul className="pager">
        <li
          className={`previous ${!hasPrev && 'disabled' || ''}`}
        >
          <a
            href="#"
            onClick={hasPrev ? () => onPageChange('prev') : false}
          >
            <span aria-hidden="true">&larr;</span> Previous
          </a>
        </li>
        <li
          className={`next ${!hasNext && 'disabled' || ''}`}
        >
          <a
            href="#"
            onClick={hasNext ? () => onPageChange('next') : false}
          >
            Next <span aria-hidden="true">&rarr;</span>
          </a>
        </li>
      </ul>
    </nav>
  )
};