import { combineReducers } from 'redux';
import SearchTermReducer from './SearchTermReducer';

export default combineReducers({
  searchTerm: SearchTermReducer,
});
