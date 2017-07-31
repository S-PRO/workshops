import * as TYPES from '../types/article';


export const create = (title, author, content) => ({
  type: TYPES.ARTICLE_CREATE,
  payload: { title, author, content }
});

export const changePage = (page) => ({
  type: TYPES.CHANGE_PAGE,
  payload: page,
});