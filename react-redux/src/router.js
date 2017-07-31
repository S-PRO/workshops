import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import ArticlesList from './containers/articles-list';
import ArticleView from './containers/article-view';
import ArticleAdd from './containers/article-add';


export default props => (
  <BrowserRouter>
    <div>
      <h1><Link to="/">react-redux workshop</Link></h1>
      <button className="btn btn-default"><Link to="/add">Add article</Link></button>
      <Route exact path="/" component={ArticlesList} />
      <Route path="/article/:id" component={ArticleView} />
      <Route exact path="/add" component={ArticleAdd}/>
    </div>
  </BrowserRouter>
);