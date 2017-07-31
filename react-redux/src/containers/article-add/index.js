import React from 'react';
import { connect } from 'react-redux';

import { create } from '../../actions/article';

import ArticleForm from '../../components/article-form';


class ArticleAdd extends React.Component {

  onSubmit = payload => {
    const { title, author, content } = payload;
    this.props.dispatch(
      create(title, author, content)
    );
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <ArticleForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

export default connect()(ArticleAdd);