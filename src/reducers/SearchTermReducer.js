import { SET_SEARCH_TERM } from '../actions/types';

const INITIAL_STATE = '';

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
}
