import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import ArticleListItem from '../../components/article-list-item';
import Pagination from '../../components/pagination';

import { changePage } from '../../actions/article';


class ArticlesList extends React.Component {

  onPageChange = direction => {
    const { dispatch, page } = this.props;
    let nextPage;
    if (direction === 'next') {
      nextPage = page + 1;
    } else {
      nextPage = page - 1;
    }
    dispatch(changePage(nextPage));
  };

  render() {
    const {
      articles,
      hasPrev,
      hasNext,
    } = this.props;
    return (
      <div>
        {
          articles.map((article, idx) => (
            <ArticleListItem
              {...article}
              key={idx}
            />
          ))
        }
        <Pagination
          hasNext={hasNext}
          hasPrev={hasPrev}
          onPageChange={this.onPageChange}
        />
      </div>
    )
  }
}


const mapStateToProps = state => {
  const { list, page } = state.article;
  const hasNext = list.length > page * 3;
  const hasPrev = page >= 2;
  return {
    articles: _.chunk(list, 3)[page - 1] || [],
    hasNext,
    hasPrev,
    page,
  }
};


export default connect(mapStateToProps, )(ArticlesList);