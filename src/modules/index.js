import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import post from './post';
import counter from './counter';

export default combineReducers({
  router: routerReducer,
  post,
  counter
});