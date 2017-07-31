import * as TYPES from '../types/comment';


const initialState = {
  list: [],
};


export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.COMMENT_CREATE:
      return {
        ...state,
        list: [
          {
            ...action.payload,
            id: state.list.length + 1,
          },
          ...state.list,
        ],
      };
    case TYPES.COMMENT_DELETE:
      return {
        ...state,
        list: state.list.filter(comment => comment.id !== action.payload.id),
      };
    default:
      return state;
  }
}