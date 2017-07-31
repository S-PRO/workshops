import * as TYPES from '../types/comment';


export const create = payload => ({
  type: TYPES.COMMENT_CREATE,
  payload,
});