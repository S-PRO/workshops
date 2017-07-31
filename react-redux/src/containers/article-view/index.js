import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import { create as commentCreate } from '../../actions/comment';

import Comment from '../../components/comment';
import CommentForm from '../../components/comment-form';


class ArticleView extends React.Component {

  onCommentSubmit = payload => {
    const { dispatch, articleId } = this.props;
    dispatch(commentCreate({...payload, articleId }))
  };

  render() {
    const { article, comments } = this.props;
    return (
      <div>
        <h3>{article.title}</h3>
        <p>{article.content}</p>
        <div>
          <span className="glyphicon glyphicon-user" />
          &nbsp;
          <strong>{article.author}</strong>
          &nbsp;
          {moment().from(article.timestamp)}
        </div>
        {
          comments.length ?
            <div>
              <h3>Comments</h3>
              {
                comments.map((comment, idx) => (
                  <Comment
                    {...comment}
                    key={idx}
                  />
                ))
              }
            </div> :
          <h3>There's no comments yet. Be first !</h3>
        }
        <CommentForm
          onSubmit={this.onCommentSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { match: { params : { id } } } = ownProps;
  const article = _.find(state.article.list, { id: Number(id) });
  const comments = state.comment.list.filter(
    comment => comment.articleId === id
  );
  return { article, comments, articleId: id };
};

export default connect(mapStateToProps)(ArticleView)