import * as TYPES from '../types/article';


const initialState = {
  list: [],
  page: 1,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ARTICLE_CREATE:
      return {
        ...state,
        list: [
          {
            ...action.payload,
            id: state.list.length + 1,
          },
          ...state.list,
        ]
      };
    case TYPES.ARTICLE_DELETE:
      return {
        ...state,
        list: state.list.filter(article => article.id !== action.payload.id),
      };
    case TYPES.CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
}